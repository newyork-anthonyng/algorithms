// https://gist.github.com/newyork-anthonyng/a4d1b8ed5bfcc2c671057ee2c1c24d6e

const sessionDetails = [
  {user: "u1", startTime: 100, endTime:200}, // 0
  {user: "u2", startTime: 200, endTime:300}, // 0
  {user: "u1", startTime: 300, endTime:600}, // 300...600 -> 400...600
  {user: "u2", startTime: 400, endTime:600}, // 0
  {user: "u1", startTime: 500, endTime:700}, // (endTime - startTime) - (if overlap, startTime - prevEndTime) => (700 - 500) - (500 - 600) => 200 - 100 => 100
  {user: "u1", startTime: 800, endTime:1000}, // 
];

function totalLoginTime(userName, startTime, endTime) {
  let result = 0;
  let previousEndTime = 0;

  // assume that sessionDetails is a sorted by startTime
  for (let i = 0; i < sessionDetails.length; i++) {
    const currentSession = sessionDetails[i];

    if (currentSession.user !== userName) continue;

    const isStartInRange = (currentSession.startTime >= startTime && currentSession.startTime <= endTime);
    const isEndInRange = (currentSession.endTime >= startTime && currentSession.endTime <= endTime);

    if (isStartInRange || isEndInRange) {
      const currentStart = Math.max(currentSession.startTime, previousEndTime, startTime);
      const currentEnd = Math.min(currentSession.endTime, endTime);

      const diff = currentEnd - currentStart;
      result += diff;
      previousEndTime = currentEnd;
    }
  }

  return result;
}

console.assert(totalLoginTime('u1', 400, 900) === 400);
console.assert(totalLoginTime('u1', 150, 900) === 550);
console.assert(totalLoginTime('u2', 220, 700) === 280);