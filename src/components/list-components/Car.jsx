import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import CarInfo from '../profile/CarInfo'
import './style.sass'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/cars'

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: props.show,
    }
  }

  hide = () => {
    this.setState({ show: false })
    this.render()
  }

  delete = () => {
    this.props.deleteCar(this.props.id)
  }

  render() {
    const { id, color, brand, model, plate } = this.props
    return (
      <>
        <ListGroup.Item key={id}>
          <Row>
            <Col xs={6}>
              {color} {brand} {model}, {plate}
            </Col>
            <Col>
              <Button
                variant="outline-dark"
                className="right"
                onClick={() => {
                  this.setState({ show: true })
                }}
              >
                Edit
              </Button>
              <Button
                variant="outline-danger"
                className="right"
                onClick={this.delete}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
        <CarInfo
          name="Edit Car Info"
          show={this.state.show}
          hide={this.hide.bind(this)}
          id={id}
          brand={brand}
          model={model}
          color={color}
          plate={plate}
        />
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Car)
