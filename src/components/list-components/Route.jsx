import React from 'react'
import Confirm from './Confirm'
// eslint-disable-next-line no-unused-vars
import { ListGroup, Row, Col, Button, Badge, Modal, Form } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import './style.sass'
import { formatDate } from '../../util'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/home'
//import StarRatings from 'react-star-ratings'



class Route extends React.Component {
  constructor() {
    super()
    this.state = {
      confirm: false
    }
  }

  delete = () => {
    this.setState({
      confirm: true
    })
  }

  deny = () => {
    this.setState({
      confirm: false
    })
  }

  render() {
    const { badge = '', styling = '', id, passenger } = this.props
    const { del, onDel } = this.props
    const deleted = () => {
      setTimeout(onDel, 1000)
    }
    const doDelete = del !== undefined
    return (
      <>
        <ListGroup.Item className={styling}>
          <Row>
            <Col xs='auto'>{passenger ? <StarButton addFav={this.props.addFavourite} id={id} /> : <></>}</Col>
            <Col xs='auto'>
              {this.props.depPoint} <span className="oi oi-arrow-right" />{' '}
              {this.props.destPoint} <Badge variant="info">{badge}</Badge>
              <br />
              <span className="oi oi-clock" />{' '}
              {formatDate(new Date(this.props.depTime))}
            </Col>
            <Col>
              {passenger && (
                <Link to={'routes/route-info/'.concat(id)}>
                  <Button variant="outline-info" className="right">
                    Route Info
                </Button>
                </Link>
              )}
              {!passenger && (
                <Link to={'routes/ride-info/'.concat(id)}>
                  <Button variant="outline-info" className="right">
                    Route Info
                </Button>
                </Link>
              )}
              {doDelete ? (
                <Button
                  variant="outline-danger"
                  className="right"
                  onClick={this.delete.bind(this)}
                >
                  Delete
              </Button>
              ) : (
                  <></>
                )}
            </Col>
          </Row>
        </ListGroup.Item>
        <Confirm
          show={this.state.confirm}
          confirm={() => {
            del(id)
            deleted()
          }}
          deny={this.deny.bind(this)}
        />
      </>
    )
  }
}

class StarButton extends React.Component {

  constructor() {
    super()
    this.state = {
      show: false,
      name: ''
    }
  }

  click = () => {
    this.setState({ show: true })
  }

  send = () => {
    this.props.addFav(this.props.id, this.state.name)
    this.setState({ show: false })
  }

  hide = () => {
    this.setState({
      show: false,
      name: ''
    })
  }

  handleChange = event => {
    const { value } = event.target
    if (value.length < 30)
      this.setState({ [event.target.name]: value })
  }

  render() {
    return (
      <>
        <Button variant='outline-info' className='mid' onClick={this.click}>
          <span className="oi oi-star"></span>
        </Button>
        <Modal show={this.state.show} centered onHide={this.hide}>
          <Modal.Header><Modal.Title>Name your favourite Route</Modal.Title></Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Routes Name</Form.Label>
              <Form.Control
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='info' onClick={this.send}>Add to Favourites</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Route)