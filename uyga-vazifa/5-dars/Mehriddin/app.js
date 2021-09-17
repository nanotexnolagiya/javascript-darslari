function repeatStr(str, n, spreat = " "){
    let result = ""
    for(var i = 0; i < n; i++){
        result += str + spreat
    }
    return result.slice(0, result.lastIndexOf(spreat))
}

module.exports = {
    repeatStr
}