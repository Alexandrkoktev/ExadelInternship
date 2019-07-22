import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Tab, Nav, Button, ListGroup } from 'react-bootstrap'
import './profile-style.sass'
// eslint-disable-next-line no-unused-vars
import Route from '../../components/list-components/Route'
// eslint-disable-next-line no-unused-vars
import Car from '../../components/list-components/Car'
// eslint-disable-next-line no-unused-vars
import UserInfo from '../../components/profile/UserInfo'
import PreviousRoute from '../../components/list-components/PreviousRoute'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/home'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    let { stars, points, username } = props
    this.state = {
      stars: stars,
      points: points,
      username: username,
    }
  }

  componentDidMount() {
    this.props.requestRides()
  }

  createRoutesList = function (text) {
    let list = text
    list = list.map(function (text, index) {
      return <Route my_text={text} routeid={index} buttontext="Delete" />
    })
    return list
  }
  createCarsList = text => {
    let list = text
    list = list.map(text => {
      return <Car description={text} />
    })
    list.push(<ListGroup.Item>Add new Car</ListGroup.Item>)
    return list
  }

  createPrevRoutesList = (num, text) => {
    let list = []
    for (let i = 0; i < num; i++) {
      list.push(<PreviousRoute my_text={text} />)
    }
    return list
  }

  render() {
    const {
      homeRides: { driverRides },
    } = this.props
    return (
      <>
        <UserInfo username="Van Ivan Minivan" stars={4.5} />
        <Tab.Container defaultActiveKey="favroutes">
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="favroutes">
                <Button variant="outline-dark">My Favorite Routes</Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cars">
                <Button variant="outline-dark">My Cars</Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="lastroutes">
                <Button variant="outline-dark">My Last Routes</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="pscrollable">
            <Tab.Content>
              <Tab.Pane eventKey="favroutes">
                <ListGroup>
                  {this.createRoutesList(driverRides)}
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="cars">
                {this.createCarsList(['Stolen Camaro', 'Krasnaya Devyatka'])}
              </Tab.Pane>
              <Tab.Pane eventKey="lastroutes">
                <ListGroup>
                  {this.createPrevRoutesList(20, 'Prevous Route')}
                </ListGroup>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
