import { delay } from '../util'

export const fakeUser = (email, password) => {
  return delay({
    lastName: email,
    firstName: email,
    role: '',
    email: email,
  })
}
