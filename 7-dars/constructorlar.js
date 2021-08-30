function User (fullName, age, gender) {
  this.fullName = fullName
  this.age = age
  this.gender = gender

  this.info = function userInfo() {
    return `${this.fullName} ${this.age} ${this.gender}`
  }
}

const anvarUser = new User('Anvar Sobirov', 33, 'male')
anvarUser.info()
const car = new function () {
  this.model = 'BMW'
}

function Car () {
  // new.target: new ? function Car : undefined
  if (!new.target) {
    return new Car()
  }
  this.wheel = 4
  this.name = 'Audi'
}

const audi = new Car
const audi1 = Car()
const audi2 = new Car()

console.log(anvarUser, car, audi)
