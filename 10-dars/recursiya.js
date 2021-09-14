// pow(value, n)
const pow = (v, n) => {
  if (n === 1) {
    return v
  } else {
    return v * pow(v, n - 1)
  }
}


console.log(pow(2, 3))

// filter
// map