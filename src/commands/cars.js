import {
    getCarsDone,
    getCarsError,
    getCarsStarting
} from '../actions/cars'
import client from 'axios'

export const mapStateToProps = state => ({
    cars: state.cars.cars
})

export const mapDispatchToProps = dispatch => ({
    requestCars: () => dispatch(getCars()),
})

export const getCars = () => {
    return async function (dispatch) {
        try {
            dispatch(getCarsStarting())
            const { data } = await client({ url: '/api/profile/cars', method: 'get' })
            dispatch(getCarsDone(data))
        } catch (e) {
            dispatch(getCarsError(e))
        }
    }
}