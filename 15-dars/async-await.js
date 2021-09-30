async function sleep (timeout) {
  if (timeout > 10000) {
    throw new Error('Rejected promise')
  }
  
  return 'Successfully'
}

async function loadData () {
  return []
}

// const sleep = async function () {}
// const sleep = async () => {}

// class User {
//   async loadUser () {

//   }
// }

loadData().then((data) => console.log('Loaded data', data))