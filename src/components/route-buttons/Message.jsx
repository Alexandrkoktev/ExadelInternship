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
                {!ride && passengers.length ?
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
                    </Button> :
                    <Button variant="outline-info" disabled><span
                        className="oi oi-envelope-closed"
                        style={{ fontSize: '25px' }}
                    /></Button>}
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
    handleClick = (name, event) => {
        let changed = this.state.chosen
        const target = event.target
        if (target.checked) changed = changed.concat(name)
        else
            changed = changed.filter(function (e) {
                return e !== name
            })
        this.setState({ chosen: changed })
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
                            name={item.bookingId}
                            key={item.bookingId}
                            onClick={event => {
                                this.handleClick(item.bookingId, event)
                            }}
                        />
                    )
                })
            )
        const click = () => {
            if (this.state.chosen.length && this.state.message.length) {
                send(this.state.chosen, this.state.message)
                hide()
            }
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
