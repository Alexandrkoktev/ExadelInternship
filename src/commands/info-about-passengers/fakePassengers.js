import { delay } from '../../util'

export const passengersArr = [
  {
    id: '1',
    name: 'Alex',
    number: '80291234512',
  },
  {
    id: '2',
    name: 'Ivan',
    number: '80445678909',
  },
  {
    id: '3',
    name: 'Dimon',
    number: '80334433221',
  },
  {
    id: '4',
    name: 'Vovan',
    number: '80332281488',
  },
  {
    id: '5',
    name: 'Semen',
    number: '80295553535',
  },
  {
    id: '5',
    name: 'Semen',
    number: '80295553535',
  },
  {
    id: '5',
    name: 'Semen',
    number: '80295553535',
  },
  {
    id: '5',
    name: 'Semen',
    number: '80295553535',
  },
]
export const fakePassengers = () => {
  return delay({
    passengers: passengersArr,
  })
}
