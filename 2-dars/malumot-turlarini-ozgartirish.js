// String-ga otkazish
// String(age)
// '' + age
// `${age}`
const age = 12;
const none = null;
const bool = false;
const ageString = `${age}`;
const boolString = String(bool)

console.log(typeof age, typeof ageString, boolString, ageString);
console.log(`${none}`);

// Number
// Number(year)
// parseInt - butun sonlar, parseFloat - kasr sonlar
// +year

const year = '2011';
const yearNumber = +year

console.log(typeof year, typeof yearNumber)

// Boolean
const month = 1;
// 0, null, undefined, '', NaN

console.log(Boolean(month), !!month)