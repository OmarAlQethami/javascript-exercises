function repeatString(string, num) {
    if(num >= 1) {
        let newString = string;
        let i = 1;
        while(i < num) {
            newString = newString + string;
            i++;
        }
        return newString;
    }
    else if(num <= -1) {
        return "ERROR";
    }
    else {
        return '';
    }
}

// Do not edit below this line
module.exports = repeatString;
