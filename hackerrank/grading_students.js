// https://www.hackerrank.com/challenges/grading/problem
function gradingStudents(grades) {
  const result = [];

  for (let i = 0; i < grades.length; i++) {
    const roundedNumber = round(grades[i]);

    if (roundedNumber < 40) {
      result.push(grades[i]);
    } else {
      result.push(roundedNumber);
    }
  }

  return result;
}

function round(number) {
  const remainder = number % 5;
  if (remainder < 3) {
    return number;
  } else {
    return number + (5 - remainder);
  }
}

let input = [73, 67, 38, 33];
let output = gradingStudents(input);
console.log(output);