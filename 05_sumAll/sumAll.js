const sumAll = function(x,y) {
    let finalSum = 0;
    if (x < 0 || y < 0) return "ERROR";
    if (Number.isInteger(x) !== true || Number.isInteger(y) !== true) return "ERROR"


    if (x > y) {
        for (let i = y; i <= x; i++) {
            finalSum += i;
        }

    }
    else {
        for(let i = x; i <= y; i++) {
            finalSum += i;
        }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
