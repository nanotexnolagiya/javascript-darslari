var romanToInt = function(s) {
    if (!s) return undefined
    let num = 0
    for (let i = 0; i < s.length; i++) {
        let word = s[i]
        let nextword = s[i+1]
        if(word + nextword == "IV") {num += 4; i++} else
        if(word + nextword == "IX") {num += 9; i++} else
        if(word + nextword == "XL") {num += 40; i++} else
        if(word + nextword == "XC") {num += 90; i++} else
        if(word + nextword == "CM") {num += 900; i++} else
        if(word + nextword == "CD") {num += 400; i++} else
        if(word == "I") num++; else
        if(word == "V") num += 5; else
        if(word == "X") num += 10; else
        if(word == "L") num += 50; else 
        if(word == "C") num += 100; else
        if(word == "D") num += 500; else
        if(word == "M") num += 1000;
        else return NaN
    }
    return num
};


var reverse = function(x) {
    var str = Math.abs(x).toString().split("").reverse().join("")
    if(x < 0) str = "-" + str
    return parseInt(str)
  }


module.exports = {
    reverse,
    romanToInt
}