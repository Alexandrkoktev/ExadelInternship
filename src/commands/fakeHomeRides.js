import { delay } from '../util'

export const fakeHomeRides = () => {
    return delay({
    passengerRides: [
        {
        id: 1,
        depPoint: 'depPoint1',
        destPoint: 'destPoint1',
        depTime: 'depTime1'
        },
        {
        id: 2,
        depPoint: 'depPoint2',
        destPoint: 'destPoint2',
        depTime: 'depTime2'
        },
        {
        id: 3,
        depPoint: 'depPoint3',
        destPoint: 'destPoint3',
        depTime: 'depTime3'
        }
    ],
    driverRides: [
        {
        id: 4,
        depPoint: 'depPoint1',
        destPoint: 'destPoint1',
        depTime: 'depTime1'
        },
        {
        id: 5,
        depPoint: 'depPoint2',
        destPoint: 'destPoint2',
        depTime: 'depTime2'
        }
    ]
})
}