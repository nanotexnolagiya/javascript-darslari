const {deepClone} = require("../../6-dars/Mehriddin/vazifa-Mehriddin")

function changeArrInd(array){
    array = new Proxy(array, {
        get: function (arr, i) {
            i < 0 ? res = arr.length + Number(i) : res = i - 1
            return arr[res];
        }
    });
    return array
}

function extendConstructor(child, parent){
    child = deepClone(child)
    child.__proto__ = parent
    return child
}

module.exports = {
    extendConstructor,
    changeArrInd
}