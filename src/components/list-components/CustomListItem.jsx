import React from 'react'
import { ListGroup, Row, ButtonToolbar } from 'react-bootstrap'

class CustomListItem extends React.Component {
  render(props) {
    let { text } = props
    return (
      <ListGroup.Item>
        <Row>
          <Col xs={12}>{text}</Col>
          <Col>
            <ButtonToolbar>
              <Button variant="outline-dark">Route Info</Button>
              <Button variant="outline-danger">Bish Bye</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default CustomListItem
