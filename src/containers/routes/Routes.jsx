import React from 'react'
// eslint-disable-next-line no-unused-vars
import RoutesList from '../../components/list-components/RoutesList'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/home'

class Routes extends React.Component {
  componentDidMount() {
    this.props.requestRides()
  }

  render() {
    const { passengerRides, driverRides } = this.props
    return (
      <>
        <RoutesList passengerRides={passengerRides} driverRides={driverRides} />
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)
