const assert = require("assert");

function QueueNode(value) {
  this.value = value;
  this.next = null;
}

function Queue() {
  let front = null;

  this.add = function(value) {
    const newNode = new QueueNode(value);

    if (front === null) {
      front = newNode;
    } else {
      let current = front;
      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  this.remove = function() {
    const result = front;

    if (result !== null) {
      front = result.next;
    }

    return result;
  }

  this.isEmpty = function() {
    return front === null;
  }

  this.print = function() {
    let current = front;

    while (current !== null) {
      current = current.next;
    }
  }
}

function Graph() {
  this.nodes = [];

  this.getNodes = function() {
    return this.nodes;
  }

  this.addNode = function(node) {
    this.nodes.push(node);
  }
}

function GraphNode(name) {
  this.name = name;

  this.children = [];

  this.getAdjacent = function() {
    return this.children;
  }

  this.addAdjacent = function(node) {
    this.children.push(node);
  }
}

const UNVISITED = "unvisited";
const VISITED = "visited";
const VISITING = "visiting";

// check if startNode is connected to endNode
function search(graph, startNode, endNode) {
  if (startNode === endNode) return true;

  const queue = new Queue();

  graph.getNodes().forEach(node => {
    node.state = UNVISITED;
  });

  startNode.state = VISITING;

  queue.add(startNode);

  let currentNode;

  while (!queue.isEmpty()) {
    currentNode = queue.remove();
    const graphNode = currentNode ? currentNode.value : null;

    if (graphNode !== null) {
      const adjacentNodes = graphNode.getAdjacent();

      for (let i = 0; i < adjacentNodes.length; i++) {
        const node = adjacentNodes[i];

        if (node.state === UNVISITED) {
          // they're connected!
          if (node === endNode) {
            return true;
          } else {
            node.state = VISITING;
            queue.add(node);
          }
        }
      }

      currentNode.state = VISITED;
    }
  }

  console.log("outside of while loop");
  return false;
}

const graph = new Graph();
const graphNode0 = new GraphNode(0);
const graphNode1 = new GraphNode(1);
const graphNode2 = new GraphNode(2);
const graphNode3 = new GraphNode(3);
const graphNode4 = new GraphNode(4);
const graphNode5 = new GraphNode(5);
const graphNode6 = new GraphNode(6);

graphNode0.addAdjacent(graphNode1);

graphNode1.addAdjacent(graphNode2);

graphNode2.addAdjacent(graphNode0);
graphNode2.addAdjacent(graphNode3);

graphNode3.addAdjacent(graphNode2);

graphNode4.addAdjacent(graphNode6);

graphNode5.addAdjacent(graphNode4);

graphNode6.addAdjacent(graphNode5);

graph.addNode(graphNode0);
graph.addNode(graphNode1);
graph.addNode(graphNode2);
graph.addNode(graphNode3);
graph.addNode(graphNode4);
graph.addNode(graphNode5);
graph.addNode(graphNode6);

const result = search(graph, graphNode6, graphNode4);
