function staircase(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push('#');

    console.log(result.join('').padStart(n, ' '))
  }
}

staircase(6);