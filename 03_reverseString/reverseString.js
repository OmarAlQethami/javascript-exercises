function reverseString(string) {

    let newString = '';
    for(let i = string.length; i > 0; i--) {
        newString = newString + string[i - 1];
    }
    return newString;
}

// Do not edit below this line
module.exports = reverseString;
