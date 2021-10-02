const sleep = (timeout, data) => new Promise(resolve => setTimeout(() => resolve(data), timeout))

module.exports = { sleep }
async function loadData () {
  const res = await sleep(2000, [1, 2, 3]) // .then => fulfilled
  return res
}

// const sleep = async function () {}
// const sleep = async () => {}

// class User {
//   async loadUser () {

//   }
// }

// IIFE
// (async () => {
//   try {
//     const data = await loadData()

//     console.log('Loaded data', data)
//   } catch (error) {
//     console.log(error)
//   }
// })()
// loadData().then((data) => console.log('Loaded data', data)).catch(console.error)

// const fetchOrders = () => {
//   fetchUser()
//     .then(() => {
//       fetchRoles()
//         .then(() => {

//         })
//     })
//     fetchTaxes()
//       .then(() => {

//       })
// }