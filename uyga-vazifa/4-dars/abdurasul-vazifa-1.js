function romanToArabic(romStr) {
  let romArr = romStr.toLocaleUpperCase().split("");
  let arabArr = romArr.map((el) => letterConvertor(el));
  if (arabArr.some((el) => isNaN(el))) return NaN;
  return arabicFromArr(arabArr);
}
function arabicFromArr(arr) {
  let max = Math.max.apply(null, arr);
  let maxIndex = arr.indexOf(max);
  let resultArr = arr.map((el, index) => {
    if (index < maxIndex) return -1 * el;
    return el;
  });
  return resultArr.reduce((accum, el) => accum + el);
}
function letterConvertor(letter) {
  switch (letter) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return NaN;
  }
}
console.log(romanToArabic("MMMDCCXXIV"));
console.log(romanToArabic("CMM"));
console.log(romanToArabic("XXI"));
console.log(romanToArabic("XXCLXI"));
