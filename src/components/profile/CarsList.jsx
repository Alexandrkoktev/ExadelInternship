import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/cars'

class CarsList extends React.Component {

    componentDidMount() {
        this.props.requestCars()
    }

    render() {
        const { cars: { cars } = [] } = this.props
        console.log(cars)
        const carsArr = cars.map(item => {
            return (<ListGroup.Item >
                Model: {item.brand} {item.model},
                Color: {item.color},
                Plate Number: {item.plate}
            </ListGroup.Item>)
        })
        return (
            < ListGroup >
                {carsArr}
            </ListGroup >
        )
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(CarsList)