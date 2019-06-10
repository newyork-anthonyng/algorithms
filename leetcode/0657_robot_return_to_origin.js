const assert = require("assert");

// https://leetcode.com/problems/robot-return-to-origin/
function judgeCircle(moves) {
  let horizontalCounter = 0;
  let verticalCounter = 0;

  for (let i = 0; i < moves.length; i++) {
    const current = moves[i];
    // switch statement is faster than if/else statements
    if (current === "L") {
      horizontalCounter++;
    } else if (current === "R") {
      horizontalCounter--;
    } else if (current === "U") {
      verticalCounter++;
    } else if (current === "D") {
      verticalCounter--;
    }
  }

  return horizontalCounter === 0 &&
    verticalCounter === 0;
}

assert(judgeCircle("UD") === true);
assert(judgeCircle("LL") === false);
