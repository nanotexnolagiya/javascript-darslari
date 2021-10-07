const { sleep } = require("../15-dars/async-await");


let range = {
  from: 1,
  to: 10,

  // [Symbol.asyncIterator]() {
  //   return {
  //     current: this.from,
  //     last: this.to,

  //     async next() {
  //       await sleep(1000)

  //       if (this.current <= this.last) {
  //         return { done: false, value: this.current++ };
  //       } else {
  //         return { done: true };
  //       }
  //     }
  //   };
  // }

  async *[Symbol.asyncIterator]() {
    for(let value = this.from; value <= this.to; value++) {
      await sleep(1000)
      yield value;
    }
  }
};

/**
 * await next()
 * is done
 * return value
 */
(async () => {
  
  for await (let value of range) { // for of
    console.log(value);
  }
})()