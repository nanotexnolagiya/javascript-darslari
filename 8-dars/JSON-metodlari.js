const user = {
  name: 'Islom',
  address: 'Toshkent shahar',
  role: {
    name: 'ADMIN',
    toJSON: () => {
      return 'MODERATOR'
    }
  },
  age: 26,
}

const result = JSON.stringify(user, null, 4) // stringify(object, props[] || cb(key, value), space)

console.log(result, typeof result)
console.log(JSON.stringify(true))
console.log(JSON.stringify([1, 2]))

const obj = JSON.parse(`{"name": "Islom", "age": 12}`); // parse(string, resever)

console.log(obj.name)