const a = null;
const b = "qizil";
let rang;
if (a !== null) {
  rang = a;
} else {
  rang = b;
}

const a = '';
const b = "qizil";

let rang = a ?? b;

console.log(rang);

const nullValue = null;
const emptyText = "";
const number = 0;

const valA = (nullValue || "") ?? "qiymat a";
const valB = emptyText ?? "qiymat B";
const valC = number ?? "qiymat C";

const valD = nullValue || "qiymat D";
const valE = emptyText || "qiymat E";
const valF = number || "qiymat F";

console.log("ValA: ", valA)
console.log("ValB: ", valB)
console.log("ValC: ", valC)

console.log("ValD: ", valD)
console.log("ValE: ", valE)
console.log("ValF: ", valF)

function undefinedF() {
  return undefined
}

function nullF() {
  return null;
}

console.log(nullF() ?? undefinedF());


