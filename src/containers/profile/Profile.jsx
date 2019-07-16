import React from 'react'
import { Tab, Nav, Button, ListGroup } from 'react-bootstrap'
import './profile-style.sass'
import CustomListItem from '../../components/list-components/CustomListItem'
import CarsListItem from '../../components/list-components/CarsListItem'
import UserInfo from '../../components/profile/UserInfo'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    var { stars, points, username } = props
    this.state = {
      stars: stars,
      points: points,
      username: username,
    }
  }

  createRoutesList = function(num, text) {
    let list = []
    for (let i = 0; i < num; i++) {
      list.push(<CustomListItem my_text={text} />)
    }
    return list
  }
  createCarsList = (num, text) => {
    let list = []
    for (let i = 0; i < num; i++) {
      list.push(<CarsListItem carid={i} description={text} />)
    }
    list.push(<ListGroup.Item>Add new Car</ListGroup.Item>)
    return list
  }

  render() {
    return (
      <>
        <h1>Profile</h1>
        <UserInfo />
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
                  {this.createRoutesList(10, 'Favorite Route')}
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="cars">
                {this.createCarsList(10, 'Stolen Camaro')}
              </Tab.Pane>
              <Tab.Pane eventKey="lastroutes">
                <ListGroup>
                  {this.createRoutesList(20, 'Prevous Route')}
                </ListGroup>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </>
    )
  }
}

export default Profile
