// 1-vazifa ( oson usulda )

function myFunc(n1, n2, o){
    return `${n1} ${o} ${n2} = ${eval(n1+o+n2)}`
}

console.log(myFunc(9,2,"**"))
console.log(myFunc(9,2,">"))

// 2-vazifa ( nurakkab usulda )
function myFunc2(v1, v2, o){
    let r;
    switch (o){
        case ">":
            r = v1 > v2
            break
        case "<":
            r = v1 < v2
            break
        case ">=":
            r = v1 >= v2
            break
        case "<=":
            r = v1 <= v2
            break
        case "==":
            r = v1 == v2
            break
        case "===":
            r = v1 === v2
    }
    return `${v1} ${o} ${v2} = ${r}`
}

console.log(myFunc2(1, "1", "==="))