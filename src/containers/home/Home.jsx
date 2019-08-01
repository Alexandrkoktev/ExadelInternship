import React from 'react'
// eslint-disable-next-line no-unused-vars
import AddRouteBTNs from '../../components/home-components/AddRouteBTNs'
// eslint-disable-next-line no-unused-vars
import ClosestRoutesList from '../../components/home-components/ClosestRoutesList'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/home'

class Home extends React.Component {
  componentDidMount() {

    this.props.requestRides()
  }

  render() {
    const { passengerRides, driverRides } = this.props
    const isLoading = this.props.userInfo.loading
    return (
      <>
        <ClosestRoutesList
          passengerRides={passengerRides}
          driverRides={driverRides}
          isLoading={isLoading}

        />
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
