import { getCarsDone, getCarsError, getCarsStarting } from '../actions/cars'
import { fakeCars } from './fakeCars'

export const mapStateToProps = state => ({
  cars: state.cars.cars,
})

export const mapDispatchToProps = dispatch => ({
  requestCars: () => dispatch(getCars()),
})

export const getCars = () => {
  return async function(dispatch) {
    try {
      dispatch(getCarsStarting())
      const carsInfo = await fakeCars()
      dispatch(getCarsDone(carsInfo))
    } catch (e) {
      dispatch(getCarsError(e))
    }
  }
}
