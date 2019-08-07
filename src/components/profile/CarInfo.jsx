import React from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/cars'

class CarInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: props.info || '',
      isError: false,
      error: '',
    }
  }

  click = () => {
    const { id } = this.props
    const { info } = this.state
    if (this.props.new) {
      this.props.addCar(info)
    } else {
      this.props.editCar(id, info)
    }
    this.hide()
  }

  textChange = event => {
    const value = event.target.value
    if (value.length < 200) this.setState({ info: value, isError: false })
    else
      this.setState({ isError: true, error: 'Your description is too long!' })
  }

  hide = () => {
    this.props.hide()
    this.setState({ info: '' })
  }

  render() {
    const { hide } = this.props
    const { isError, error } = this.state
    const title = this.props.new ? 'Add New Car' : 'Edit Car'
    return (
      <Modal show={this.props.show} centered onHide={hide}>
        {isError && (
          <Alert key={1} variant="danger" className="wide">
            {error}
          </Alert>
        )}
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Your Car's Descrption</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              value={this.state.info}
              onChange={this.textChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={this.click}>
            Save
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
