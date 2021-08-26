let user = {
  name: "John",
  age: 20,
  book: {
    name_: "Book name",
    logBook: function() {
      console.log(this.name)
    }
  },
  sayHi() {
    let arrow = () => {console.log(this.name)}
    arrow();
  },
  logName: function() {
    console.log(this.age)
  },
  arrowLog: () => {
    console.log(this.name)
  }
}

let admin = user;

user = null;

admin.book.logBook();