import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import CarInfo from '../profile/CarInfo'
import Confirm from './Confirm'
import './style.sass'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/cars'

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: props.show,
      confirm: false
    }
  }

  hide = () => {
    this.props.hide()
    this.setState({ show: false })
    this.render()
  }

  delete = () => {
    this.props.deleteCar(this.props.id)
    this.props.hide()
  }

  deny = () => {
    this.setState({ confirm: false })
  }

  confirm = () => {
    this.setState({ confirm: true })
  }

  render() {
    const { id, info } = this.props
    return (
      <>
        <ListGroup.Item key={id}>
          <Row>
            <Col xs={6}>{info}</Col>
            <Col>
              <Button
                variant="outline-info"
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
                onClick={this.confirm.bind(this)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
        <CarInfo
          new={false}
          show={this.state.show}
          hide={this.hide.bind(this)}
          id={id}
          info={info}
        />
        <Confirm
          show={this.state.confirm}
          confirm={this.delete.bind(this)}
          deny={this.deny.bind(this)} />
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Car)
