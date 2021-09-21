/**
 * Inkapsulyatsiya
 * Meros olish
 * Polimorfizm
 */

class User {
  name = null
  age = null

  constructor (name, age) {
    this.name = name
    this.age = age
  }

  get birthDate() {
    return '12.12.1990'
  }

  sayAbout() {
    console.log(`${this.name} ${this.age}`)
  }
}


const user = new User('Islom', 26)

user.sayAbout()