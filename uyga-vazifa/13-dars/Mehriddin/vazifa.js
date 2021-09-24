function findArr(arr, cb){
    function loop(i){
        if(i >= arr.length) return undefined; else
        if(cb(arr[i], i, arr)) return arr[i]; 
        else return loop(i+1)
    }
    return loop(0)
}

function mapArr(arr, cb){
    function loop(i){
        if(i >= arr.length) return undefined;
        let res = cb(arr[i], i, arr)
        if(res) arr[i] = res;
        loop(i+1)
    }
    loop(0)
    return arr
}

module.exports = {
    findArr,
    mapArr
}