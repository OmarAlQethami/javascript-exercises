const palindromes = function (text) {
  var re = /[\W_]/g;
  var lowRegStr = text.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;

};

// Do not edit below this line
module.exports = palindromes;
