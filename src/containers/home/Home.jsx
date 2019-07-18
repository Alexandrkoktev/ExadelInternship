import React from 'react'
// eslint-disable-next-line no-unused-vars
import AddRouteBTNs from '../../components/home-components/AddRouteBTNs'
// eslint-disable-next-line no-unused-vars
import ClosestRoutesList from '../../components/home-components/ClosestRoutesList'

class Home extends React.Component {
  constructor() {
    super();
    this.passengerRoutes = [];  // массив поездок (пассажир)
    this.driverRoutes = [];     // массив поездок (водитель)
  }

  requestRides = () => {
    this.passengerRoutes = [
      {
        id: 1,
        depPoint: 'depPoint1',
        destPoint: 'destPoint1',
        depTime: 'depTime1'
      },
      {
        id: 2,
        depPoint: 'depPoint2',
        destPoint: 'destPoint2',
        depTime: 'depTime2'
      },
      {
        id: 3,
        depPoint: 'depPoint3',
        destPoint: 'destPoint3',
        depTime: 'depTime3'
      }
    ];
    this.driverRoutes = [
      {
        id: 1,
        depPoint: 'depPoint1',
        destPoint: 'destPoint1',
        depTime: 'depTime1'
      },
      {
        id: 2,
        depPoint: 'depPoint2',
        destPoint: 'destPoint2',
        depTime: 'depTime2'
      },
      {
        id: 3,
        depPoint: 'depPoint3',
        destPoint: 'destPoint3',
        depTime: 'depTime3'
      }
    ]
    // получаем поездки(пассажир и водитель отдельно?)
    // this.passengerRoutesID = state.
  }

  componentDidMount() {
    // from maptoDToP
    // this.reaquestRides()
  }

  render() {
    const { passengerRides } = this.props;

    return (
      <>
        <AddRouteBTNs />
        <ClosestRoutesList passengerRides={passengerRides} />
      </>
    )
  }
}

export const mapStateToProps = state => ({
  passengerRides: state.home.rides,
  driverRides: state.home.driverRides
})

export const mapDispatchToProps = dispatch => ({

  setUser: (email, password) => dispatch(getUser(email, password)),
})

export default Home
