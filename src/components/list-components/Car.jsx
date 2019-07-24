import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import CarInfo from '../profile/CarInfo'

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: props.show,
    }
  }

  hide = () => { this.setState({ show: false }) }

  render() {
    const { car } = this.props
    return (
      <>
        <ListGroup.Item key={car.id}>
          <Row>
            <Col xs={10}>
              {car.color} {car.brand} {car.model},
              {car.plate}
            </Col>
            <Col>
              <Button variant="outline-dark" className="right" onClick={() => { this.setState({ show: true }) }}>
                Edit
            </Button>
              <Button variant="outline-danger" className="right">
                Delete
            </Button>
            </Col>
          </Row>
        </ListGroup.Item>
        <CarInfo name="Edit Car Info" show={this.state.show} hide={this.hide.bind(this)} car={car} />
      </>
    )
  }
}

export default Car
