function User(a, b) {
  this.qoshish = a + b;
  this.ayirish = a - b;
}
const qoshish = new User(3, 4);
console.log(qoshish.ayirish);
