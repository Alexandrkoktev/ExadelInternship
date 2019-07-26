import { delay } from './../util'

export const dCars = [
  {
    id: 1,
    brand: 'Nissan',
    model: 'Maxima',
    color: 'grey',
    plate: 'AB-1 2233',
  },
  {
    id: 2,
    brand: 'Toyota',
    model: 'Corolla',
    color: 'green',
    plate: 'CD-2 3344',
  },
  {
    id: 3,
    brand: 'Ford',
    model: 'Taurus',
    color: 'white',
    plate: 'EF-3 4455',
  },
]

export const fakeCars = () => {
  return delay({
    cars: dCars,
  })
}
