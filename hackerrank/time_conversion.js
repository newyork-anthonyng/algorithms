function timeConversion(s) {
  if (s[s.length - 2] === 'A') {
    const oldHours = parseInt(s.slice(0, 2));
    const newHours = `${oldHours % 12}`;

    return `${newHours.padStart(2, '0')}${s.slice(2, s.length - 2)}`
  } else {
    const oldHours = parseInt(s.slice(0, 2));
    const newHours = oldHours === 12 ? `${oldHours}` : `${oldHours + 12}`

    return `${newHours}${s.slice(2, s.length - 2)}`
  }
}

let input = '12:40:22AM';
let output = timeConversion(input);
console.log(output)

input = '12:45:54PM';
output = timeConversion(input);
console.log(output)