function findArr(arr, cb){
    function loop(i){
        if(i >= arr.length) return undefined; else
        if(cb(arr[i], i, arr)) return arr[i]; 
        else return loop(i+1)
    }
    return loop(0)
}

function mapArr(arr, cb){
    let narr = []
    function loop(i){
        if(i >= arr.length) return undefined;
        narr.push(cb(arr[i], i, arr))
        loop(i+1)
    }
    loop(0)
    return narr
}

module.exports = {
    findArr,
    mapArr
}