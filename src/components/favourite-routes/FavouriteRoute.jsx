import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Col, ListGroup, Row } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import Confirm from '../list-components/Confirm'
import '../list-components/style.sass'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/home'

class FavouriteRoute extends React.Component {
  constructor() {
    super()
    this.state = {
      confirm: false
    }
  }

  confirm = () => {
    this.setState({
      confirm: true
    })
  }

  deny = () => {
    this.setState({
      confirm: false
    })
  }

  delete = () => {
    this.props.deleteFavourite(this.props.id)
  }
  render() {
    return (
      <>
        <ListGroup.Item>
          <Row>
            <Col xs={3}>
              {this.props.name} :
            </Col>
            <Col xs='auto'> {this.props.depPoint}{' '}
              <span className="oi oi-arrow-right" /> {this.props.destPoint}
            </Col>
            <Col>
              <Button onClick={this.confirm.bind(this)} variant='outline-danger' className='right'>Delete</Button>
            </Col>
          </Row>
        </ListGroup.Item>
        <Confirm
          show={this.state.confirm}
          deny={this.deny.bind(this)}
          confirm={this.delete.bind(this)}
        />
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteRoute)
