function deepCloning(user) {
  let admin = {};
  for (let key in user) {
    if (typeof user[key] === "object") {
      admin[key] = deepCloning(user[key]);
    } else {
      admin[key] = user[key];
    }
  }
  return admin;
}

module.exports = deepCloning;
