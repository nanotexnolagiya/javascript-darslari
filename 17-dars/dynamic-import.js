const { default: moduleExportMjs } = require("./module-export.mjs")

// import sql from 'mysql'
// module.exports

if (form.values.gender === 'male') {
  // import sql from 'mysql' => not working
  // import()  => Promise
  (async () => {
    // const { default, foo, User } = await import('male.js')
  })()
} else {
  // import('female.js').then(() => console.log('Loaded female.js'))
}