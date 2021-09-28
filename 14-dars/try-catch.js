// Error, ReferenceError, TypeError

try {
  function loadData () {
    console.log('Loadded successefully')
  }
  console.log('Start load')
  loadData()
  console.log('After error')
} catch(error) {
  console.log('Error name: ', error.name)
  console.log('Error message:', error.message)
  console.log('Error stack:', error.stack)
} finally {
  console.log('Finally done')
}