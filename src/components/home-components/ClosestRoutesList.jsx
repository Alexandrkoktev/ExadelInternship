import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Route from '../list-components/Route'

class ClosestRoutesList extends React.Component {
  constructor() {
    super();
    // чо-та-там
  }


  const { passengerRides } = this.props;
  const clientRides = passengerRides.map(value => ( <Route my_text="Passenger" info={value} routeid="4" />));

  render() {
    return (
      <>
        <div style={{ display: 'inline-block', width: '50%' }}>
          <ListGroup>
            <Route depPoint="Офис ПВТ" destPoint="Зелёный Луг" depTime="18:00" routeid="1" />
            <Route depPoint="Офис ПВТ" destPoint="Малиновка" depTime="18:40" routeid="2" />
            <Route depPoint="Офис ПВТ" destPoint="Каменная Горка" depTime="20:30" routeid="3" />
          </ListGroup>
        </div>
        <div style={{ display: 'inline-block', width: '50%' }}>
          <ListGroup>
            {clientRides}
          </ListGroup>
        </div>
      </>
    )
  }
}

export default ClosestRoutesList
