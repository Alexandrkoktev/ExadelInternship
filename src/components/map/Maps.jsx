import React from 'react'
// eslint-disable-next-line no-unused-vars
import { YMaps, Map, RouteEditor } from 'react-yandex-maps'
import './map.sass'

class Maps extends React.Component {
  render() {
    return (
      <YMaps
        enterprise
        query={{
          apikey: 'bc323490-dd90-4c2a-a14b-52d16caaa720', // api-ключ Метельского Дмитрия ( +375(44)539-29-07 )
          // Если появилась ошибка 429 Too Many Requests(количество запросов превысило 25000),
          // поменяйте api-ключ на этот: 031b92eb-3b91-4faf-ab36-728360e7784c - api-ключ Коктева Александра
          ns: 'use-load-option',
          load: 'Map,control.ZoomControl,control.FullscreenControl',
        }}
      >
        <Map
          className="maps-wrapper"
          defaultState={{
            center: [53.9, 27.56],
            zoom: 11,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
        >
          {this.props.needRouteEditor && <RouteEditor />}
        </Map>
      </YMaps>
    )
  }
}

export default Maps
