function defangIPaddr(address) {
  return address.replace(/\./g, '[.]');
}

let input = '1.1.1.1';
let output = defangIPaddr(input);
console.log(output);

function anotherAnswer(address) {
  let result = '';

  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      result += '[.]';
    } else {
      result += address[i];
    }
  }

  return result;
}

input = '1.1.1.1';
output = anotherAnswer(input);
console.log(output);
