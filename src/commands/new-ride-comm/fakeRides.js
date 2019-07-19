import { delay } from '../../util'

export  const dRides = [
  { id: '1', depPoint: 'a', destPoint: 'b', depTime: '12:12' },
  { id: '2', depPoint: 'c', destPoint: 'd', depTime: '22:12' },
  { id: '3', depPoint: 'a', destPoint: 'r', depTime: '10:12' },
  { id: '4', depPoint: 'a', destPoint: 'g', depTime: '9:30' },
  { id: '5', depPoint: 'f', destPoint: 'j', depTime: '15:10' },
  { id: '6', depPoint: 'c', destPoint: 'd', depTime: '19:00' },
  { id: '7', depPoint: 'd', destPoint: 'e', depTime: '22:28' },
]
export const fakeRides = () => {
  return delay({
    rides: dRides,
  })
}
