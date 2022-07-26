const fibonacci = function(num) {
    let seq = [];
    if(num < 0) {
        return "OOPS";
    }
    for(let i = 0; i <= num; i++) {
        if(i === 0 || i === 1) {
            seq[i] = 1;
            continue;
        }
        seq[i] = seq[i - 1] + seq[i - 2];
    }
    return seq[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
