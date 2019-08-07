import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import {
  mapStateToProps,
  mapDispatchToProps,
} from '../../commands/notifications'

class Message extends React.Component {
  constructor() {
    super()
    this.state = { show: false }
  }

  hide = () => {
    this.setState({ show: false })
  }

  render() {
    const {
      routeMessage,
      bookingMessage,
      ride,
      passengers,
      driver,
    } = this.props
    return (
      <>
        <Button
          variant="outline-info"
          onClick={() => {
            this.setState({ show: true })
          }}
        >
          <span
            className="oi oi-envelope-closed"
            style={{ fontSize: '25px' }}
          />
        </Button>
        <SendMessage
          show={this.state.show}
          send={ride ? bookingMessage : routeMessage}
          ride={ride}
          to={ride ? driver : passengers}
          hide={this.hide.bind(this)}
        />
      </>
    )
  }
}

class SendMessage extends React.Component {
  constructor() {
    super()
    this.state = {
      message: '',
      chosen: [],
    }
  }

  componentDidMount() {
    if (this.props.ride) this.setState({ chosen: [this.props.to.id] })
  }

  handleChange = event => {
    if (event.target.value.length < 256)
      this.setState({ message: event.target.value })
  }
  handleClick = event => {
    const chnge = this.state.chosen

    this.setState({ chosen: chnge })
  }
  render() {
    const { show, send, ride, to, hide } = this.props
    const addressant = ride ? (
      <Form.Label>{to.name}</Form.Label>
    ) : (
      to.map(item => {
        return (
          <Form.Check
            type="checkbox"
            label={item.name}
            id={item.id}
            key={item.id}
          />
        )
      })
    )
    const click = () => {
      if (this.state.chosen.length && this.state.message.length)
        send(this.state.chosen, this.state.message)
    }
    return (
      <Modal centered show={show} onHide={hide}>
        <Modal.Header>
          <Modal.Title>Write your message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Message will be sent to</Form.Label> {addressant}
            </Form.Group>
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              onChange={this.handleChange}
              value={this.state.message}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={click}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)
