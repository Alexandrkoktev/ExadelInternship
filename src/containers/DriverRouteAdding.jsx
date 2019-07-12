import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col, Button } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
class DriverRouteAdding extends React.Component{
  render(){
    return(
      <div>
      <Container>
        <Row>
          <Col>
            <Row>From:</Row>
            <Row>To:</Row>
            <Row>Car:</Row>
            <Row>Seats:</Row>
            <Row>Time:</Row>
          </Col>
          <Col>Map</Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <Button variant="dark" type="button" onClick={()=> alert('Creating')}>
            Create Route
          </Button>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
export default DriverRouteAdding