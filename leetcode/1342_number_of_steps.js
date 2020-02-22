var numberOfSteps = function(num) {
    let steps = 0;
    let current = num;

    while (current !== 0) {
        if (current % 2 === 0) {
            current = current / 2;
        } else {
            current--;
        }
        steps++;
    }

    return steps;
}

let result = numberOfSteps(14);
console.log(result);
result = numberOfSteps(8);
console.log(result);
result = numberOfSteps(123);
console.log(result);