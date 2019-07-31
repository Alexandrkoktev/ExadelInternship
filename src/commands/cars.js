import {
  getCarsDone,
  getCarsError,
  getCarsStarting,
  putCarDone,
  putCarError,
  putCarStarting,
  postCarDone,
  postCarError,
  postCarStarting,
  deleteCarDone,
  deleteCarError,
  deleteCarStarting,
} from '../actions/cars'
import client from './axios'

export const getProfileCars = () => {
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

export const getNewRouteCars = () => {
  return async function (dispatch) {
    try {
      dispatch(getCarsStarting())
      const { data } = await client({ url: '/api/newroute/cars', method: 'get' })
      console.log(data)
      dispatch(getCarsDone(data))
    } catch (e) {
      dispatch(getCarsError(e))
    }
  }
}

export const sendCar = (id, data) => {
  return async function (dispatch) {
    try {
      dispatch(putCarStarting())
      await client({
        url: '/api/profile/cars/'.concat(id),
        method: 'put',
        data: { id, carInformation: data },
      })
      dispatch(putCarDone())
    } catch (e) {
      dispatch(putCarError(e))
    }
  }
}

export const deleteCar = id => {
  return async function (dispatch) {
    try {
      dispatch(deleteCarStarting())
      await client({ url: '/api/profile/cars/'.concat(id), method: 'delete' })
      dispatch(deleteCarDone())
    } catch (e) {
      dispatch(deleteCarError(e))
    }
  }
}

export const addCar = data => {
  return async function (dispatch) {
    try {
      dispatch(postCarStarting())
      await client({
        url: '/api/profile/cars/',
        method: 'post',
        data: data,
        headers: { 'Content-Type': 'application/json' }
      })
      dispatch(postCarDone())
    } catch (e) {
      dispatch(postCarError(e))
    }
  }
}

export const mapStateToProps = state => ({
  cars: state.cars.cars,
})

export const mapDispatchToProps = dispatch => ({
  requestCars: () => dispatch(getProfileCars()),
  getCars: () => dispatch(getNewRouteCars()),
  editCar: (id, data) => dispatch(sendCar(id, data)),
  addCar: (data) => dispatch(addCar(data)),
  deleteCar: id => dispatch(deleteCar(id)),
})
