class User {
  data = {}

  static validate(data) {
    // 
    return true
  }

  submit () {
    return User.validate(this.data) ? this.data : new Error()
    
  }
}

const user = new User()

user.submit()