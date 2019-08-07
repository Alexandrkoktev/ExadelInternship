import React from 'react'
import StarRatings from 'react-star-ratings'

class RateDriver extends React.Component {
    constructor() {
        super()
        this.state = {
            rating: 0,
        }
    }

    changeRating = newRating => {
        this.setState({ rating: newRating })
        this.props.rateDriver(this.props.id, newRating)
    }

    render() {
        const { enabled, driverRating = 0, rating } = this.props
        return (<>{enabled ?
            <StarRatings rating={+driverRating}
                starRatedColor="#888888"
                numberOfStars={5}
                name="driver-rating"
                starDimension="17px"
                starSpacing="2px"
            />
            :
            <StarRatings rating={rating || this.state.rating}
                starRatedColor="#179EB7"
                numberOfStars={5}
                changeRating={this.state.rating === 0 && !rating ? this.changeRating : null}
                name="driverRating"
                starDimension="17px"
                starSpacing="2px"
            />
        }
        </>
        )
    }
}
/*{enabled ? (
                       <StarRatings
                         rating={this.props.driverRating}
                         starRatedColor="#179EB7"
                         numberOfStars={5}
                         name="driverRating"
                         starDimension="17px"
                         starSpacing="2px"
                       />
                     ) : (
                         <StarRatings
                           rating={this.state.rating}
                           starRatedColor="#179EB7"
                           starHoverColor={'rgb(230, 67, 47)'}
                           changeRating={this.changeRating}
                           numberOfStars={5}
                           name="rating"
                           starDimension="17px"
                           starSpacing="2px"
                         /> */
export default RateDriver;