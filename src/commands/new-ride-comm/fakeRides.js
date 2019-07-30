import { delay } from '../../util'

export const dRides = [
  {
    id: 1,
    depPoint: 'ул. Якуба Коласа, 5',
    destPoint: 'ул. Академика Купревича, 3',
    depTime: '25.07.2019 10:30',
  },
  {
    id: 2,
    depPoint: 'ул. Академика Купревича, 3',
    destPoint: 'Каменная Горка',
    depTime: '25.07.2019 18:30',
  },
  {
    id: 3,
    depPoint: 'пр. Машерова',
    destPoint: 'Каменная Горка',
    depTime: '26.07.2019 18:30',
  },
]
export const fakeRides = () => {
  return delay({
    rides: dRides,
  })
}
