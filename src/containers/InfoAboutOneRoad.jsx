import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import Footer from '../components/Footer'
import Header from '../components/Header'

class InfoAboutOneRoad extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Header/>
        </Row>
        <Row>
          <Col>

          </Col>
        </Row>
        <Row>
          <Footer/>
        </Row>
      </Container>
    )
  }
}

export default InfoAboutOneRoad;