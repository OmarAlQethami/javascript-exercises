function sumAll(start, end) {
    let sum = 0;
    if(start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    if(isNaN(start) || isNaN(end) || start < 0 || end < 0 || typeof (start && end) === "string"){
        return "ERROR";
    }
    for(let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
