function generateParenthesis(number) {
  const answers = [];

  function backtrack(s, left, right) {
    // we're maxed out
    if (s.length == 2 * number) {
      answers.push(s);
      return;
    }

    if (left < number) {
      backtrack(s + '(', left + 1, right);
    }

    if (right < left) {
      backtrack(s + ')', left, right + 1);
    }
  }

  backtrack('', 0, 0);
  return answers;
}

console.log(generateParenthesis(3));