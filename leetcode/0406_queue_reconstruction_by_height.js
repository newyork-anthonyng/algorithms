function reconstructQueue(people) {
  const sortedPeople = sortQueueByAscendingHeight(people);

  const result = [];
  for (let i = 0; i < sortedPeople.length; i++) {
    insertPersonInToResult(sortedPeople[i], result);
  }

  return result;
}

function sortQueueByAscendingHeight(people) {
  return people.slice().sort((a, b) => {
    return a[0] - b[0];
  })
}

function insertPersonInToResult(person, result) {
  const height = person[0];
  const tallerPeopleAhead = person[1];
  let insertionIndex = tallerPeopleAhead;

  let isOccupied = !!result[insertionIndex];
  let areNotEnoughTallerPeopleAhead = countTallerPeopleAhead(result, insertionIndex, height) < tallerPeopleAhead;

  while (
    isOccupied || areNotEnoughTallerPeopleAhead
  ) {
    insertionIndex++;
    isOccupied = !!result[insertionIndex];
    areNotEnoughTallerPeopleAhead = countTallerPeopleAhead(result, insertionIndex, height) < tallerPeopleAhead;
  }

  result[insertionIndex] = person;
}

function countTallerPeopleAhead(result, currentIndex, height) {
  let answer = 0;
  for (let i = 0; i < currentIndex; i++) {
    if (
      result[i] === undefined ||
      result[i][0] >= height
    ) {
      answer++;
    }
  }

  return answer;
}

let input = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
let output = reconstructQueue(input);
console.log(output);
