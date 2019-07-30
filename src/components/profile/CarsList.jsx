import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/cars'
import Car from '../list-components/Car'
import CarInfo from './CarInfo'

class CarsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  componentDidMount() {
    this.props.requestCars()
  }

  hide = () => {
    this.props.requestCars()
    this.setState({ show: false })
  }

  render() {
    const { cars = [] } = this.props
    const carsArr = cars.map(item => {
      const info = item.carInformation
      return (
        <Car
          id={item.id}
          info={info}
          hide={this.hide.bind(this)}
          key={item.id}
        />
      )
    })
    return (
      <>
        <ListGroup>
          {carsArr}
          <ListGroup.Item
            onClick={() => {
              this.setState({ show: true })
            }}
          >
            Add Car
          </ListGroup.Item>
        </ListGroup>
        <CarInfo
          new={true}
          show={this.state.show}
          hide={this.hide.bind(this)}
        />
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsList)
