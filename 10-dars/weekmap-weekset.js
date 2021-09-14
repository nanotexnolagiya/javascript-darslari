let user = {
  name: 'Islom',
}

const cache = new WeakMap()
cache.set(user, 'User by name Islom')


const users = new WeakSet()

users.add(user)

user = null