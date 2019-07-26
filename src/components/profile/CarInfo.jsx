import React from 'react'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/cars'

class CarInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brand: props.brand || '',
      model: props.model || '',
      color: props.color || '',
      plate: props.plate || '',
    }
  }

  click = () => {
    const { id } = this.props
    const { color, brand, model, plate } = this.state
    let data = [[color, brand, model].join(' '), plate].join(', ')
    this.props.editCar(id, data)
    this.props.hide()
  }

  brandChange = event => {
    const value = event.target.value
    this.setState({ brand: value })
  }
  modelChange = event => {
    const value = event.target.value
    this.setState({ model: value })
  }
  colorChange = event => {
    const value = event.target.value
    this.setState({ color: value })
  }
  plateChange = event => {
    const value = event.target.value
    this.setState({ plate: value })
  }

  render() {
    const { hide } = this.props
    const title = this.props.new ? 'Add New Car' : 'Edit Car'
    return (
      <Modal show={this.props.show} centered onHide={hide}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Brand
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  value={this.state.brand}
                  onChange={this.brandChange}
                />
              </Col>
              <Form.Label column sm="2">
                Model
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  value={this.state.model}
                  onChange={this.modelChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Color
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  value={this.state.color}
                  onChange={this.colorChange}
                />
              </Col>
              <Form.Label column sm="2">
                Plate
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  value={this.state.plate}
                  onChange={this.plateChange}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={this.click}>
            Save
          </Button>
          <Button variant="outline-dark" onClick={hide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarInfo)
