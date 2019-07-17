import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Dropdown, DropdownButton } from 'react-bootstrap'

class RoutesList extends React.Component {
  render() {
    return (
      <DropdownButton title={this.props.type} variant="outline-dark">
        <Dropdown.Item action onClick={() => alert('clicked')}>
          1st route
        </Dropdown.Item>
        <Dropdown.Item action onClick={() => alert('clicked')}>
          2nd route
        </Dropdown.Item>
        <Dropdown.Item action onClick={() => alert('clicked')}>
          3rd route
        </Dropdown.Item>
        <Dropdown.Item action onClick={() => alert('clicked')}>
          4th route
        </Dropdown.Item>
        <Dropdown.Item action onClick={() => alert('clicked')}>
          5th route
        </Dropdown.Item>
      </DropdownButton>
    )
  }
}
export default RoutesList
