// bind
const user = {
  age: 26,
  getAge(suffix = '', e) {
    // this === user
    return this.age + suffix + e
  }
}

const getUserAge = user.getAge

const User = () => {
  this.book = 'Mechanical'
}

User.prototype.click = function (user, e) {
  console.log(this.book)
}

const user = new User()

// document.body.onclick = user.click.bind(user, { name: 'DevQuiz' })


setTimeout(function () {
  // this === window
  // this.age === window.age
  console.log(getUserAge.call(user, ' years old', ' Event')); // bind(context, ...args)
}, 1000)

// call
// call(context, arg1, arg2)


// apply
// apply(context, args[])