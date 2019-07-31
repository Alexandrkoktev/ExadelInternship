import { delay } from '../../util'

export const driverArr = [
  {
    id: '1',
    name: 'Alex',
    number: '80291234512',
  },
]
export const fakeDriver = () => {
  return delay({
    driver: driverArr,
  })
}
