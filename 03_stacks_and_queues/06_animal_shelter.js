function QueueNode(value) {
  this.value = value;
  this.next = null;
}

function Queue() {
  let bottom = null;

  this.add = function(value) {
    const newNode = new QueueNode(value);

    if (bottom === null) {
      bottom = newNode;
    } else {
      // get end of queue
      let current = bottom;
      while (current !== null && current.next !== null) {
        if (current.next !== null) {
          current = current.next;
        }
      }

      current.next = newNode;
    }
  }

  this.remove = function() {
    const result = bottom;

    if (result !== null) {
      bottom = result.next;
    }

    return result;
  }

  this.isEmpty = function() {
    return bottom === null;
  }

  this.peek = function() {
    return bottom;
  }
}

function AnimalShelter() {
  let dogQueue = new Queue();
  let catQueue = new Queue();

  this.enqueue = function(value) {
    if (value.type === "dog") {
      dogQueue.add({
        ...value,
        time: Date.now()
      });
    } else if (value.type === "cat") {
      catQueue.add({
        ...value,
        time: Date.now()
      });
    }
  }

  this.dequeue = function() {
    // which is older, a cat or a dog?
    if (catQueue.isEmpty()) {
      return dogQueue.remove();
    }
    if (dogQueue.isEmpty()) {
      return catQueue.remove();
    }

    const oldestCat = catQueue.peek();
    const oldestDog = dogQueue.peek();

    // cat came before dog
    if (oldestCat.time < oldestDog.time) {
      return catQueue.remove();
    } else {
      return dogQueue.remove();
    }
  }

  this.dequeueDog = function() {
    return dogQueue.remove();
  }

  this.dequeueCat = function() {
    return catQueue.remove();
  }
}

const animalShelter = new AnimalShelter();
animalShelter.enqueue({
  type: "dog",
  name: "Clifford"
});
animalShelter.enqueue({
  type: "cat",
  name: "Gatto"
});
