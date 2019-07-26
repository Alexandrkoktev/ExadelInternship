import React from 'react'
// eslint-disable-next-line no-unused-vars
import { YMaps, Map, RouteEditor } from 'react-yandex-maps'
import './map.sass'

class Maps extends React.Component {
  constructor() {
    super()
    this.map = null
    this.ymaps = null
    this.route = null
  }

  buttonClick = () => {
    console.log('button clicked')
    console.log(this.map.geoObjects.each(i => console.log(i)))
    // console.log(this.map.RouteEditor.getRoute());  // не рабочее
  }

  onApiAvailable = ymaps => {
    // console.log('API loaded.');
    this.ymaps = ymaps
    const balloonContentBodyLayout = ymaps.templateLayoutFactory.createClass(
      '<div>Test</div>'
    )
    ymaps
      .route(
        [
          [53.92769, 27.68307],
          { type: 'viaPoint', point: 'Логойский тракт, 15/1' },
          'ул. Веры Хоружей',
          { type: 'wayPoint', point: 'ст. м. Автозаводская' },
        ],
        { balloonContentBodyLayout }
      )
      .then(route => {
        route.getPaths().options.set({
          // в балуне выводим только информацию о времени движения с учетом пробок
          // можно выставить настройки графики маршруту
          strokeColor: '0000ffff',
          opacity: 0.9,
        })

        // добавляем маршрут на карту
        this.map.geoObjects.add(route)
      })
  }

  render() {
    return (
      <>
        <YMaps
          query={{
            apikey: 'bc323490-dd90-4c2a-a14b-52d16caaa720', // api-ключ Метельского Дмитрия ( +375(44)539-29-07 )
            // Если появилась ошибка 429 Too Many Requests(количество запросов превысило 25000),
            // поменяйте api-ключ на этот: 031b92eb-3b91-4faf-ab36-728360e7784c - api-ключ Коктева Александра
            ns: 'use-load-option',
            load: 'Map,control.ZoomControl,control.FullscreenControl',
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
            modules={['templateLayoutFactory', 'route']}
          >
            {this.props.needRouteEditor && <RouteEditor />}
          </Map>
        </YMaps>
      </>
    )
  }
}

export default Maps
