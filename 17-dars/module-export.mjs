// export: as, default, from

// export function foo () {

// }

const SQL_NAME = 'mysql'

class User {
  
}

export { SQL_NAME as MYSQL_NAME, User }

export default {
  project: 'Dev Quiz'
}

module.exports = {
  User,
  SQL_NAME
}

