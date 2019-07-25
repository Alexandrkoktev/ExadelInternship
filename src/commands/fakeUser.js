const fakeUserData = {
  Nadezhda: {
    password: 'qwerty',
    role: 'user',
    login: 'Nadezhda',
  },
  Polza: {
    password: 'qwerty123',
    role: 'administrator',
    login: 'Polza',
  },
  Vladislav: {
    password: 'qwerty123',
    role: 'administrator',
    login: 'Polza',
  },
  Dmitry: {
    password: 'qwerty',
    role: 'user',
    login: 'Dmitry',
  },
  Ilya: {
    password: 'qwerty',
    role: 'user',
    login: 'Ilya',
  },
}

export function fakeUser(email, password) {
  const emails = Object.keys(fakeUserData)
  if (emails.includes(email) && password === fakeUserData[email].password) {
    return fakeUserData[email]
  }
  if (emails.includes(email) && password !== fakeUserData[email].password) {
    throw new Error('user does not exist')
  }
  throw new Error('user does not exist')
}
