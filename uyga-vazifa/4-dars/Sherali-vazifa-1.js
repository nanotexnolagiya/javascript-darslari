// Rim raqamlarini songa aylanturuvchi funksiya yozing
switcher = (roman) => {
  let number;
  switch (roman) {
    case "I":
      number = 1;
      break;
    case "V":
      number = 5;
      break;
    case "X":
      number = 10;
      break;
    case "L":
      number = 50;
      break;
    case "C":
      number = 100;
      break;
    case "D":
      number = 500;
      break;
    case "M":
      number = 1000;
      break;

    default:
      number = -1;
      break;
  }
  return number;
};
romanToNumber = (str) => {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    let s1 = switcher(str.charAt(i));
    if (i + 1 < str.length) {
      let s2 = switcher(str.charAt(i + 1));
      if (s1 >= s2) {
        result += s1;
      } else {
        result += s2 - s1;
        i++;
      }
    } else {
      result += s1;
    }
  }
  return result;
};
// console.log("MMCMXCIV - " + romanToNumber("MMCMXCIV"));
// console.log("MMCMXCXVII - " + romanToNumber("MMCMXCXVII"));
// console.log("MCMXXCIII - " + romanToNumber("MCMXXCIII"));
// console.log("MCMXCCXV - " + romanToNumber("MCMXCCXV"));
// console.log("MCMXCCCXXIV - " + romanToNumber("MCMXCCCXXIV"));

module.exports = romanToNumber;
