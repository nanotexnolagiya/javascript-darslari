//Rim raqam misolini hozircha ishlayolmadim

// Sonni teskarisini topish.
function teskariSon(num) {
  let strNum = String(num);
  let str = "";
  const number = [];
  for (let i = strNum.length - 1, k = 0; i >= 0; i--, k++) {
    number[k] = strNum[i];
    str += number[k];
  }
  return parseInt(str);
}

module.exports = teskariSon;
