function intToRoman(num) {
  let tensPlace = 1;
  let currentNumber = `${num}`;
  let result = [];

  for (let i = currentNumber.length - 1; i >= 0; i--) {
    const current = +currentNumber[i] * tensPlace;
    result.unshift(digitToRoman(current));

    tensPlace = tensPlace * 10;
  }

  return result.join('');
}

function digitToRoman(num) {
  switch(num) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
    case 10:
      return 'X';
    case 20:
      return 'XX';
    case 30:
      return 'XXX';
    case 40:
      return 'XL';
    case 50:
      return 'L';
    case 60:
      return 'LX';
    case 70:
      return 'LXX';
    case 80:
      return 'LXXX';
    case 90:
      return 'XC';
    case 100:
      return 'C';
    case 200:
      return 'CC';
    case 300:
      return 'CCC';
    case 400:
      return 'CD';
    case 500:
      return 'D';
    case 600:
      return 'DC';
    case 700:
      return 'DCC';
    case 800:
      return 'DCCC';
    case 900:
      return 'CM'
    case 1000:
      return 'M';
    case 2000:
      return 'MM';
    case 3000:
      return 'MMM';
  }
}

console.assert(intToRoman(3) === 'III', '3 === III');
console.assert(intToRoman(4) === 'IV', '4 === IV');
console.assert(intToRoman(9) === 'IX', '9 === IX');
console.assert(intToRoman(58) === 'LVIII', '58 === LVIII');
console.assert(intToRoman(1994) === 'MCMXCIV', '1994 === MCMXCIV');

function anotherSolution(num) {
  let output = '';

  while (num > 0) {
    if (num >= 1000) {
      num -= 1000;
      output += 'M';
    } else if (num >= 900) {
      num -= 900;
      output += 'CM';
    } else if (num >= 500) {
      num -= 500;
      output += 'D';
    } else if (num >= 400) {
      num -= 400;
      output += 'CD';
    } else if (num >= 100) {
      num -= 100;
      output += 'C';
    } else if (num >= 90) {
      num -= 90;
      output += 'XC';
    } else if (num >= 50) {
      num -= 50;
      output += 'L';
    } else if (num >= 40) {
      num -= 40;
      output += 'XL';
    } else if (num >= 10) {
      num -= 10;
      output += 'X';
    } else if (num >= 9) {
      num -= 9;
      output += 'IX';
    } else if (num >= 5) {
      num -= 5;
      output += 'V';
    } else if (num >= 4) {
      num -= 4;
      output += 'IV';
    } else {
      num -= 1;
      output += 'I';
    }
  }

  return output;
}

console.assert(anotherSolution(3) === 'III', '3 === III');
console.assert(anotherSolution(4) === 'IV', '4 === IV');
console.assert(anotherSolution(9) === 'IX', '9 === IX');
console.assert(anotherSolution(58) === 'LVIII', '58 === LVIII');
console.assert(anotherSolution(1994) === 'MCMXCIV', '1994 === MCMXCIV');