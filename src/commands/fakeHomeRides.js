import { delay } from '../util'

export const fakeHomeRides = () => {
    return delay({
    passengerRides: [
        {
            id: 1,
            depPoint: 'ул. Якуба Коласа, 5',
            destPoint: 'ул. Академика Купревича, 3',
            depTime: '25.07.2019 10:30'
        },
        {
            id: 2,
            depPoint: 'ул. Академика Купревича, 3',
            destPoint: 'Каменная Горка',
            depTime: '25.07.2019 18:30'
        },
        {
            id: 3,
            depPoint: 'ул. Академика Купревича, 3',
            destPoint: 'Каменная Горка',
            depTime: '26.07.2019 18:30'
        }
    ],
    driverRides: [
        {
            id: 4,
            depPoint: 'Каменная Горка',
            destPoint: 'ул. Академика Купревича, 3',
            depTime: '22.06.2019 10:00'
        },
        {
            id: 5,
            depPoint: 'Каменная Горка',
            destPoint: 'ул. Академика Купревича, 3',
            depTime: '23.06.2019 10:00'
        },
        {
            id: 6,
            depPoint: 'Каменная Горка',
            destPoint: 'ул. Академика Купревича, 3',
            depTime: '24.06.2019 10:00'
        }
    ]
})
}