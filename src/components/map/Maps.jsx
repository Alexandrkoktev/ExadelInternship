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

  createPlacemark(coords) {
    return new this.ymaps.Placemark(
      coords,
      {
        iconCaption: 'поиск...',
      },
      {
        preset: 'islands#blueDotIconWithCaption',
        draggable: true,
      }
    )
  }

  addPlacemark = async e => {
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
        this.props.changeDepPoint(address);       // Илья, тебе сюда(А)
      // Илья, тебе сюда(А)
        
        if(this.pointB && this.route) {
          // отправляем запрос на валидацию
        }
      } else {
        this.pointA = this.createPlacemark(coords)
        this.map.geoObjects.add(this.pointA)
        const address = await this.getAddress(
          this.pointA.geometry.getCoordinates()
        )
        this.pointA.properties.set({
          iconCaption: 'точка А',
          balloonContent: address,
        })
        this.props.changeDepPoint(address);       // Илья, тебе сюда(А)
        this.pointA.events.add(
          'dragend',
          async function() {
            const address = await this.getAddress(
              this.pointA.geometry.getCoordinates()
            )
            this.pointA.properties.set({
              balloonContent: address,
            })
            this.props.changeDepPoint(address);  // и сюда(А)
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
        this.props.changeDestPoint(address);     // а ещё сюда(точка Б)
      } else {
        this.pointB = this.createPlacemark(coords)
        this.map.geoObjects.add(this.pointB)
        const address = await this.getAddress(
          this.pointB.geometry.getCoordinates()
        )
        this.pointB.properties.set({
          iconCaption: 'точка B',
          balloonContent: address,
        })
        this.props.changeDestPoint(address);    // сюда(Б)
        this.pointB.events.add(
          'dragend',
          async function() {
            const address = await this.getAddress(
                this.pointB.geometry.getCoordinates()
              )
            this.pointB.properties.set({
              balloonContent: address,
            })
            this.props.changeDestPoint(address);  // и сюда(Б)
          }.bind(this)
        )
      }
      this.isA = true
    }
  }

  getPoints() {
    if(this.pointA && this.pointB)
      return [
        this.pointA.geometry.getCoordinates(),
        this.pointB.geometry.getCoordinates()
      ]
  }

  componentWillReceiveProps = nextProps => {
    const shouldUpdateMap =
      this.map &&
      nextProps.showing &&
      !!Object.keys(nextProps.showing).length &&
      !deepEqual(this.props.showing, nextProps.showing)
    if (shouldUpdateMap) {
      const balloonContentBodyLayout = this.ymaps.templateLayoutFactory.createClass(
        '<div>Test</div>',
      )
      this.ymaps
        .route(
          [
            nextProps.showing.startPoint,
            ...nextProps.showing.viaPoints.map(point => {
              return { type: 'viaPoint', point: point }
            }),
            nextProps.showing.finishPoint,
          ],
          { balloonContentBodyLayout },
        )
        .then(route => {
          route.getPaths().options.set({
            // в балуне выводим только информацию о времени движения с учетом пробок
            // можно выставить настройки графики маршруту
            strokeColor: '0000ffff',
            opacity: 0.9,
          })
          route.options.set({
            mapStateAutoApply: true,
          })

          this.map.geoObjects.remove(this.route)
          this.route = route
          this.map.geoObjects.add(this.route)
        })
    }
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
      alert('There\'s no map, my Lord.')
      return
    }

    const points = []

    const route = this.map.controls.get('routeEditor').getRoute()

    if (!route) {
      alert('There\'s no route, my Lord.')
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
      alert('There\'s no route, my Lord.')
      return
    }

    for (let i = 0; i < nPaths - 1; ++i) {
      paths
        .get(i)
        .getSegments()
        .forEach(segment => {
          points.push(segment.getCoordinates()[0])
        })
    }

    const segments = paths.get(nPaths - 1).getSegments()
    const nSegments = segments.length

    for (let i = 0; i < nSegments - 1; ++i) {
      points.push(segments[i].getCoordinates()[0])
    }
    points.push(...segments[nSegments - 1].getCoordinates())

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
    }

    if (this.map && this.props.needPlacemarks) {
      this.map.events.add('click', this.addPlacemark)
    }

    // тут прорисовка для просмотра информации о маршруте
    // if (this.props && this.props.showing) {
    //   const balloonContentBodyLayout = ymaps.templateLayoutFactory.createClass(
    //     '<div>Test</div>'
    //   )
    //   ymaps
    //     .route(
    //       [
    //         this.props.showing.startPoint,
    //         ...this.props.showing.viaPoints.map((point)=>{return {type:'viaPoint', point: point}}),
    //         this.props.showing.finishPoint
    //       ],
    //       { balloonContentBodyLayout }
    //     )
    //     .then(route => {
    //       route.getPaths().options.set({
    //         // в балуне выводим только информацию о времени движения с учетом пробок
    //         // можно выставить настройки графики маршруту
    //         strokeColor: '0000ffff',
    //         opacity: 0.9,
    //       })

    //       // this.route = route;   // !!!!

    //       // добавляем маршрут на карту
    //       this.map.geoObjects.add(route)
    //     })
    // }
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
