import React from 'react'
import { YMaps, Map, RouteEditor } from 'react-yandex-maps'
import './map.sass'

class Maps extends React.Component {
  render() {
    return (
      <YMaps
        enterprise
        query={{
          apikey: 'bc323490-dd90-4c2a-a14b-52d16caaa720', // api-ключ Метельского Дмитрия ( +375(44)539-29-07 )
          ns: 'use-load-option',
          load: 'Map,control.ZoomControl,control.FullscreenControl',
        }}
      >
        <Map
          defaultState={{
            center: [53.90, 27.56],
            zoom: 10,
            controls: ['zoomControl', 'fullscreenControl']
          }}
        >
          <RouteEditor />
        </Map>
      </YMaps>
    )
  }
}

export default Maps
