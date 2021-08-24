/*
    M_, D_ ... буларни усти тарафида чёрточка булиши лозим эди топа олмадим шунга тагига чизиб куяколдим.
    Биринчи заданийни текшириб берсангиз агар тугри булса рефакторинг килишга харакат киламан лекин хоззирча бундан бошка идея келмади ечими буйича.
*/

const symboles = new Map([
    ['M_', 1000000],
    ['D_', 500000],
    ['C_', 100000],
    ['L_', 50000],
    ['X_', 10000],
    ['V_', 5000],
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
]);

const MAX_VALUE = 1000000;
const MAX_KEY = 'M_';

function getRepeatSymbolesWithLimit(symbol, limit) {
    return symboles.has(symbol)
        ? symbol.repeat(limit)
        : null
}

function getSymbolByValue(val) {
    let data = [...symboles].find(([_, mapVal]) => mapVal == val);
    if (data) {
        let [key, _] = data;
        return key;
    }

    return null;
}

const getLengthOfNumber = number => 1 + '0'.repeat(number.toString().length - 1);

const getNumber = number => parseInt(number / getLengthOfNumber(number)) * Number(getLengthOfNumber(number))

function getSymbolNumberCorrector(from, to, number) {
    if (((from * getLengthOfNumber(number)) > number) && (number >= (to * getLengthOfNumber(number)))) {

        if ((from * getLengthOfNumber(number)) > MAX_VALUE) {
            symbol1 = getRepeatSymbolesWithLimit(MAX_KEY, parseInt(number / getLengthOfNumber(number)))
            return [symbol1, getNumber(number)]
        }

        symbol1 = getSymbolByValue(getLengthOfNumber(number))
        symbol2 = getSymbolByValue(from * getLengthOfNumber(number))

        return [symbol1 + symbol2, getNumber(number)]
    }

    return false;
}

function getSymboleOfNumber(number) {

    if (getSymbolNumberCorrector(10, 9, number) !== false) {
        return getSymbolNumberCorrector(10, 9, number);
    }

    if (getSymbolNumberCorrector(5, 4, number) !== false) {
        return getSymbolNumberCorrector(5, 4, number)
    }

    for (let [key, value] of symboles.entries()) {
        if (number >= value) {
            if (number > MAX_VALUE) {
                let symbol = getRepeatSymbolesWithLimit(MAX_KEY, parseInt(number / getLengthOfNumber(number)))
                return [symbol, getNumber(number)]
            }
            return [getRepeatSymbolesWithLimit(key, parseInt(number / value)), parseInt(number / value) * value];
        }
    }
}

let result = '';

function getResult(number) {
    let [key, value] = getSymboleOfNumber(number)

    number -= value
    result += key;

    if (number != 0) {
        return getResult(number)
    }

    return result

}


// РЕЗУЛТАТЬ: console.log(getResult(1994))

function getReverseNumber(number) {
    let result = Math.abs(number).toString().split('').reverse().join('');

    if (number > 0) {
        return Number(result)
    }

    return Number(result) * (-1);
}


// РЕЗУЛТАТЬ: console.log(getReverseNumber(-1996))
