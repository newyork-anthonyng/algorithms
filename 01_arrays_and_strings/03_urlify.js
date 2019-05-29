/**
 * Time complexity: O(n)
 * Space complexity: O(n)
*/
function urlify(string) {
  return string.split(" ").join("%20");
}

console.assert(urlify("Ms. Jones") === "Ms.%20Jones", "Ms. Jones was not urlify'd correctly");
console.assert(urlify("Ms. Jones is great") === "Ms.%20Jones%20is%20great", "Ms. Jones was not urlify'd correctly");
