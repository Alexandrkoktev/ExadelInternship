import React from 'react'
import { Tab, Nav, Button, ListGroup } from 'react-bootstrap'
import './profile-style.sass'
import Route from '../../components/list-components/Route'
import Car from '../../components/list-components/Car'
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
      list.push(<Route my_text={text} key={i}/>)
    }
    return list
  }
  createCarsList = (num, text) => {
    let list = []
    for (let i = 0; i < num; i++) {
      list.push(<Car carid={i} description={text} key={i}/>)
    }
    list.push(<ListGroup.Item key={num+1}>Add new Car</ListGroup.Item>)
    return list
  }

  render() {
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
