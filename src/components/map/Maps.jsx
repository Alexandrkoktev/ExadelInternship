import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'
import './map.sass'

class Maps extends React.Component {
  render() {
    return (
      <YMaps>
        <div className="maps-wrapper">
          <Map defaultState={{ center: [53.90, 27.56], zoom: 10 }} />
        </div>
      </YMaps>
    )
  }
}

export default Maps
