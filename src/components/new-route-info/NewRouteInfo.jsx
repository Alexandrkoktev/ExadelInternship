import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Form, Container, Col, Row } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import DateTimePicker from 'react-datetime-picker'

class NewRouteInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      from: this.props.from,
      to: this.props.to,
      seats: this.props.seats,
      carId: '',
      car: this.props.car,
    }
  }

  changeCar = (cars,event) => {
    const carId = event.target.value
    this.setState({ carId })
    this.props.onCar(carId,cars.find(item=>item.id===Number(carId)).carInformation)
  }

  render() {
    const { cars } = this.props
    const carsArr = cars.map(item => {
      return (
        <option  key={item.id} value={item.id}>
          {item.carInformation}
        </option>
      )
    })
    return (
      <Container>
        <h3>New route:</h3>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              From:
            </Form.Label>
            <Col>
              <Form.Control type="text" value={this.state.from} readOnly />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              To:
            </Form.Label>
            <Col>
              <Form.Control type="text" value={this.state.to} readOnly />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Time:
            </Form.Label>
            <Col>
              <DateTimePicker
                onChange={this.props.onTime}
                value={this.props.time}
                minDate={new Date()}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formGridState">
            <Form.Label column sm="2">
              Car:
            </Form.Label>
            <Col>
              <Form.Control
                as="select"
               placeholder={this.state.car}
                onChange={(event)=>{this.changeCar(cars,event)
                }}
              >
                {carsArr}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Seats:
            </Form.Label>
            <Col>
              <Form.Control type="text"  defaultValue={this.props.seats} onChange={this.props.onSeats} />
            </Col>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default NewRouteInfo
