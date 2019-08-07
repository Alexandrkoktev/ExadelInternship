import React from 'react'
// eslint-disable-next-line no-unused-vars
import { YMaps, Map } from 'react-yandex-maps'
import './map.sass'
// eslint-disable-next-line import/no-duplicates
import { debounce } from '../../util'
// eslint-disable-next-line import/no-duplicates
import { deepEqual } from '../../util'

class Maps extends React.Component {
  constructor() {
    super()
    this.map = null
    this.ymaps = null
    this.route = null
    this.pointA = null
    this.pointB = null
    this.isA = true
  }

  createPlacemark(coords, caption, preset, draggable) {
    return new this.ymaps.Placemark(
      coords,
      {
        iconCaption: caption,
      },
      {
        preset: `islands#${preset}`,
        draggable: draggable,
      }
    )
  }

  createRoute = async routeInfo => {
    const balloonContentBodyLayout = this.ymaps.templateLayoutFactory.createClass(
      '<div>Test</div>'
    )
    const viaPoints = routeInfo.viaPoints || []
    const route = await this.ymaps.route(
      [
        routeInfo.startPoint,
        ...viaPoints.map(point => {
          return { type: 'viaPoint', point: point }
        }),
        routeInfo.finishPoint,
      ],
      { balloonContentBodyLayout }
    )
    route.getPaths().options.set({
      strokeColor: '0000ffff',
      opacity: 0.9,
    })
    route.options.set({
      mapStateAutoApply: true,
    })
    return route
  }

  addPlacemarkOnClick = async e => {
    const coords = e.get('coords')
    if (this.isA) {
      if (this.pointA) {
        this.pointA.geometry.setCoordinates(coords)
        const address = await this.getAddress(
          this.pointA.geometry.getCoordinates()
        )
        this.pointA.properties.set({
          balloonContent: address,
        })
        this.props.changeDepPoint(address)
      } else {
        this.pointA = this.createPlacemark(
          coords,
          'поиск...',
          'blueDotIcon',
          true
        )
        this.map.geoObjects.add(this.pointA)
        const address = await this.getAddress(
          this.pointA.geometry.getCoordinates()
        )
        this.pointA.properties.set({
          iconCaption: 'точка А',
          balloonContent: address,
        })
        this.props.changeDepPoint(address)
        this.pointA.events.add(
          'dragend',
          async function () {
            const address = await this.getAddress(
              this.pointA.geometry.getCoordinates()
            )
            this.pointA.properties.set({
              balloonContent: address,
            })
            this.props.changeDepPoint(address)
          }.bind(this)
        )
      }
      this.isA = false
    } else {
      if (this.pointB) {
        this.pointB.geometry.setCoordinates(coords)
        const address = await this.getAddress(
          this.pointB.geometry.getCoordinates()
        )
        this.pointB.properties.set({
          balloonContent: address,
        })
        this.props.changeDestPoint(address)
      } else {
        this.pointB = this.createPlacemark(
          coords,
          'поиск...',
          'blueDotIcon',
          true
        )
        this.map.geoObjects.add(this.pointB)
        const address = await this.getAddress(
          this.pointB.geometry.getCoordinates()
        )
        this.pointB.properties.set({
          iconCaption: 'точка B',
          balloonContent: address,
        })
        this.props.changeDestPoint(address)
        this.pointB.events.add(
          'dragend',
          async function () {
            const address = await this.getAddress(
              this.pointB.geometry.getCoordinates()
            )
            this.pointB.properties.set({
              balloonContent: address,
            })
            this.props.changeDestPoint(address)
          }.bind(this)
        )
      }
      this.isA = true
    }
  }

  getPoints() {
    if (this.pointA && this.pointB)
      return [
        this.pointA.geometry.getCoordinates(),
        this.pointB.geometry.getCoordinates(),
      ]
  }

  componentWillReceiveProps = nextProps => {
    const shouldUpdateMap =
      this.map &&
      nextProps.showing &&
      !!Object.keys(nextProps.showing).length &&
      !deepEqual(this.props.showing, nextProps.showing)

    if (shouldUpdateMap) {
      // this.map.geoObjects.removeAll()
      this.createRoute(nextProps.showing).then(route => {
        // промис может заресолвиться на странице, где нет карты
        this.map.geoObjects.remove(this.route)
        this.route = route
        this.map.geoObjects.add(this.route)
      })
    }

    // баг с отображением информации о маршруте
  }

  getAddress(coordinates) {
    return this.ymaps.geocode(coordinates).then(resp => {
      const nearest = resp.geoObjects.get(0)
      const name = nearest.properties.get('name')
      return name.toString()
    })
  }

  getRouteInfo = async () => {
    if (!this.map) {
      alert('Map is not available at that moment. Wait for it or refresh page')
      return
    }

    const points = []

    const route = this.map.controls.get('routeEditor').getRoute()

    if (!route) {
      alert("There's no route.")
      return
    }

    const routeDistance = route.getLength()
    const routeDuration = route.getTime()

    const viaPoints = route
      .getViaPoints()
      .toArray()
      .map(point => point.geometry.getCoordinates())

    const paths = route.getPaths()
    const nPaths = paths.getLength()

    if (nPaths === 0) {
      alert("There's no route.")
      return
    }

    paths.each(path => {
      path.getSegments().forEach(segment => {
        let coordsArr = segment.getCoordinates()
        coordsArr = coordsArr.slice(0, -1)
        points.push(...coordsArr)
      })
    })

    const routeWPs = route.getWayPoints().toArray()
    points.push(routeWPs[routeWPs.length - 1].geometry.getCoordinates())

    const [startPointString, finishPointString] = await Promise.all([
      this.getAddress(points[0]),
      this.getAddress(points[points.length - 1]),
    ])

    return {
      startPoint: points[0],
      finishPoint: points[points.length - 1],
      startPointName: startPointString,
      finishPointName: finishPointString,
      wayPoints: points,
      viaPoints: viaPoints,
      distance: routeDistance,
      duration: routeDuration,
    }
  }

  getEndPoints = async () => {
    this.route = this.map.controls.get('routeEditor').getRoute()
    if (this.route) {
      const wayPoints = this.route.getWayPoints().toArray()
      if (wayPoints.length === 2) {
        const handler = async () =>
          this.props.handleChange(
            await Promise.all(
              this.route
                .getWayPoints()
                .toArray()
                .map(point => this.getAddress(point.geometry.getCoordinates()))
            )
          )
        this.route.events.add('geometrychange', debounce(handler, 200))
        this.props.handleChange(
          await Promise.all(
            wayPoints.map(point =>
              this.getAddress(point.geometry.getCoordinates())
            )
          )
        )
      }
    }
  }

  onApiAvailable = ymaps => {
    this.ymaps = ymaps

    if (this.map && this.props.needRouteEditor) {
      const routeEditor = this.map.controls.add('routeEditor')
      routeEditor.events.add('deselect', this.getEndPoints)

      const clearMapButton = new this.ymaps.control.Button({
        data: {
          content: 'Clear map',
          title: 'Click to clear the map',
        },
        options: {
          selectOnClick: false,
        },
      })
      clearMapButton.events.add('click', () => {
        this.map.controls.get('routeEditor').select()
        this.props.handleChange(['', ''])
        this.route = null
      })
      this.map.controls.add(clearMapButton, {
        float: 'left',
      })
    }

    if (this.map && this.props.needPlacemarks) {
      this.map.events.add('click', this.addPlacemarkOnClick)

      const clearMapButton = new this.ymaps.control.Button({
        data: {
          content: 'Clear map',
          title: 'Click to clear the map',
        },
        options: {
          selectOnClick: false,
        },
      })
      clearMapButton.events.add('click', () => {
        this.props.clearMap()
        this.map.geoObjects.removeAll()
        this.props.changeDepPoint('')
        this.props.changeDestPoint('')
        this.pointA = null
        this.pointB = null
        this.isA = true
        this.route = null
      })
      this.map.controls.add(clearMapButton, {
        float: 'left',
      })
    }

    if (this.props && this.props.passengerInfo) {
      this.createRoute(this.props.passengerInfo).then(route => {
        // промис может заресолвиться на странице, где нет карты
        this.route = route
        this.map.geoObjects.add(this.route)
      })
      this.map.geoObjects.add(
        this.createPlacemark(
          this.props.passengerInfo.meetPoint,
          'Точка посадки',
          'greenDotIconWithCaption',
          false
        )
      )
      this.map.geoObjects.add(
        this.createPlacemark(
          this.props.passengerInfo.destinationPoint,
          'Точка высадки',
          'redDotIconWithCaption',
          false
        )
      )
    }

    if (this.props && this.props.driverInfo) {
      this.createRoute(this.props.driverInfo).then(route => {
        // промис может заресолвиться на странице, где нет карты
        this.route = route
        this.map.geoObjects.add(this.route)
      })
      this.props.driverInfo.bookings.forEach(booking => {
        this.map.geoObjects.add(
          this.createPlacemark(
            booking.meetPoint,
            `Посадка ${booking.name}`,
            'greenDotIconWithCaption',
            false
          )
        )
        this.map.geoObjects.add(
          this.createPlacemark(
            booking.destinationPoint,
            `Высадка ${booking.name}`,
            'redDotIconWithCaption',
            false
          )
        )
      })
    }
  }

  render() {
    return (
      <YMaps
        query={{
          apikey: 'bc323490-dd90-4c2a-a14b-52d16caaa720', // api-ключ Метельского Дмитрия ( +375(44)539-29-07 )
          // Если появилась ошибка 429 Too Many Requests(количество запросов превысило 25000),
          // поменяйте api-ключ на этот: 031b92eb-3b91-4faf-ab36-728360e7784c - api-ключ Коктева Александра
          ns: 'use-load-option',
          load: 'package.full',
        }}
      >
        <Map
          instanceRef={ref => {
            this.map = ref
          }}
          onLoad={ymaps => this.onApiAvailable(ymaps)}
          className="maps-wrapper"
          defaultState={{
            center: [53.9, 27.56],
            zoom: 11,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
        />
      </YMaps>
    )
  }
}

export default Maps
