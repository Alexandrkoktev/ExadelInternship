import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Dropdown, DropdownButton } from 'react-bootstrap'

class RoutesList extends React.Component {
  render() {
   const { rides:{rides}=[] }=this.props
    console.log(rides)
    const dRidesArr = rides.map(item => {
      return (
        <Dropdown.Item key={item.id}>
          {item.depPoint} -> {item.destPoint} Time: {item.depTime}
        </Dropdown.Item>
      )
    })
    return (
      <DropdownButton title={this.props.type} variant="outline-dark">
        {dRidesArr}
      </DropdownButton>
    )
  }
}

export default RoutesList
