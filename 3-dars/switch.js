let a = "ok";

function switchF() {
  return "qale"
}

switch(switchF()) {

  case NaN:
  case "ok":
    console.log("qale");
    break;
  case "salom":
    console.log("salom");
    break;
  default: 
    console.log("xayr");
}