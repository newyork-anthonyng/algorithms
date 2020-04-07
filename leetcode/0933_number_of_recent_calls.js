
function RecentCounter() {
  let queue = [];

  // Time: O(1)
  // Space: O(1)
  function ping(t) {
    let current = queue[0];
    while (current && current < (t - 3000)) {
      queue.shift();
      current = queue[0];
    }

    queue.push(t);
    return queue.length;
  }

  return {
    ping
  };
};

let obj = new RecentCounter();
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));