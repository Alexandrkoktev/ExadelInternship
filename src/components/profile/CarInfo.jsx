import React from 'react'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

class CarInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: '',
            model: '',
            color: '',
            plate: ''
        }
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
        return (
            <Modal show={this.props.show} centered onHide={hide}>
                <Modal.Header>
                    <Modal.Title>{this.props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>Brand</Form.Label>
                            <Col>
                                <Form.Control type="text" value={this.state.brand} onChange={this.brandChange} />
                            </Col>
                            <Form.Label column sm='2'>Model</Form.Label>
                            <Col>
                                <Form.Control type='text' value={this.state.model} onChange={this.modelChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm='2'>Color</Form.Label>
                            <Col>
                                <Form.Control type="text" value={this.state.color} onChange={this.colorChange} />
                            </Col>
                            <Form.Label column sm='2'>Plate</Form.Label>
                            <Col>
                                <Form.Control type='text' value={this.state.plate} onChange={this.plateChange} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark">Save</Button>
                    <Button variant="outline-dark" onClick={hide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default CarInfo