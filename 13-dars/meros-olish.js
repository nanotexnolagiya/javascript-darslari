'use strict';

class Car {
  #color = null
  _wheel = null
  __model = null
  speed = null

  constructor(model, wheel, speed, color) {
    this.__model = model
    this._wheel = wheel
    this.speed = speed
    this.#color = color
  }

  get color () {
    return this.#color
  }

  get wheel() {
    return this._wheel
  }

  get model() {
    return this.__model
  }

  getModel() {
    return this.__model
  }

  set model (value) {
    return this.__model = value
  }

  getSpeed () {
    console.log(`${this.model}: ${this.speed} m/s`)
  }
}

class Audi extends Car {
  constructor(options) {
    super(options.model, options.wheel, options.speed, options.color) // === new Car()
  }
}

class BMW extends Car {
  
}

const audiA6 = new Audi({model: 'A6', wheel: 4, speed: 300, color: 'black'})
const bmwM6 = new BMW('M6', 4, 200, 'white')

audiA6.getSpeed()
audiA6.model = 'test'
console.log(audiA6.model, audiA6.#color)
bmwM6.getSpeed()