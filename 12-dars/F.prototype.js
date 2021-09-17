

function Car () {
  this.model = 'Car model'
}
// F.prototype = { constructor: F }
Car.prototype.showModel = function () {
  console.log(this.model)
}

const car = new Car()
const car1 = car.constructor()

car.showModel()

