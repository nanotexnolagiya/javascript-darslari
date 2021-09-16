const isEmpty = (obj) => {
  for (let key in obj) {
    if (key !== null) return false;
  }
  return true;
};

module.exports = isEmpty;
