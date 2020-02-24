/*
'PAYPALISHIRING' => 'PAHNAPLSIIGYIR'
*/


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let counter = -1;
    let increment = 1;
    function oscillate() {
        if (numRows === 1) {
            return 0;
        }

        if (counter === 0) {
            increment = 1;
        } else if (counter === (numRows - 1)) {
            increment = -1;
        }

        counter += increment;

        return counter;
    }

    let result = [];
    for (let i = 0; i < numRows; i++) {
        result[i] = [];
    }

    for (let i = 0; i < s.length; i++) {
        result[oscillate()].push(s[i]);
    }

    let string = '';
    for (let i = 0; i < result.length; i++) {
        string += result[i].join('');
    }

    return string;
};

// if 3 rows, then every 5th one
// if 4 rows, then every 7th one
// if 5 rows, then every 9th one
// if 6 rows, then every 11th one

// let result = convert('PAYPALISHIRING', 3);
// let result = convert('PAYPALISHIRING', 4);
let result = convert('AB', 1);
console.log(result);