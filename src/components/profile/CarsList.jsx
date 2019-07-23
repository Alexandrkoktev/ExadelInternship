import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../commands/cars'

class CarsList extends React.Component {

    componentDidMount() {
        this.props.requestCars();
    }

    render() {
        const { cars = [] } = this.props;
        const carsArr = cars.map(item => {
            return (<ListGroup.Item key={item.id} >
                Model: {item.brand} {item.model},
                Color: {item.color},
                Plate Number: {item.plate}
            </ListGroup.Item>)
        })
        return (
            < ListGroup >
                {carsArr}
                <ListGroup.Item>Add Car</ListGroup.Item>
            </ListGroup >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsList)