import React from 'react'
// eslint-disable-next-line no-unused-vars
import AddRouteBTNs from '../../components/home-components/AddRouteBTNs'
// eslint-disable-next-line no-unused-vars
import ClosestRoutesList from '../../components/home-components/ClosestRoutesList'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/home'

class Home extends React.Component {
/*
  requestRides = () => {
    this.passengerRides = [
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
    this.driverRides = [
      {
        id: 4,
        depPoint: 'depPoint1',
        destPoint: 'destPoint1',
        depTime: 'depTime1'
      },
      {
        id: 5,
        depPoint: 'depPoint2',
        destPoint: 'destPoint2',
        depTime: 'depTime2'
      }
    ]
  }
*/
  componentDidMount() {
    this.props.requestRides();
  }

  render() {
    const { homeRides: {passengerRides, driverRides} } = this.props;
    alert(passengerRides);
    return (
      <>
        <AddRouteBTNs />
        <ClosestRoutesList passengerRides={passengerRides} driverRides={driverRides} />
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
