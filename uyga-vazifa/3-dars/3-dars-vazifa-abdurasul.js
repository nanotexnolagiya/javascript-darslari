// Abdurasul Hafizov 
function myMath(a,oper,b) {
    let calc = new Function(`return ${a}${oper}${b}`)
    console.log(`${a}${oper}${b}=${calc()}`);
    return  calc()
  }
myMath(15,'*',2)
myMath(5,'**',2)
myMath(45,'-',15)
myMath(true,'&&',true)
myMath(-7,'>',0)
myMath(77,'===',77)
myMath(15, '%', 5)