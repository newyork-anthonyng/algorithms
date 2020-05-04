const MinStack = function() {
  this.stack = [];
};

MinStack.prototype.push = function(x) {
  this.stack.push({
    value: x,
    min: Math.min(this.getMin(), x)
  });
}

MinStack.prototype.pop = function() {
  const top = this.stack.pop();
  return top.value;
}

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1].value;
}

MinStack.prototype.getMin = function() {
  if (this.stack.length === 0) return Infinity;

  return this.stack[this.stack.length - 1].min;
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);

output = minStack.getMin(); // return -3
console.log(output);

minStack.pop();
output = minStack.top();    // return 0
console.log(output);

output = minStack.getMin(); // return -2
console.log(output);
