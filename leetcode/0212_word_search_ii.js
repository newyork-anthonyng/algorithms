let board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
];
let words = ["oath","pea","eat","rain"];

findWords(board, words);

function findWords(board, words) {
  const result = [];

  const trie = buildTrie(words);

  const dfs = (x, y, curr) => {
    const outOfBounds = x < 0 ||
      y < 0 ||
      x === board.length ||
      y === board[x].length ||
      board[x][y] === '#';
    if (outOfBounds) return;

    const c = board[x][y];
    const wordNotFound = curr.next[c] === undefined;
    if (wordNotFound) return;

    const wordFound = curr.next[c].word !== null;
    if (wordFound) {
      result.push(curr.next[c].word);
      curr.next[c].word = null;
    }
    board[x][y] = "#";
    curr = curr.next[c];
    dfs(x + 1, y, curr)
    dfs(x - 1, y, curr);
    dfs(x, y + 1, curr);
    dfs(x, y - 1, curr);

    board[x][y] = c;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      dfs(i, j, trie);
    }
  }

  console.log('result', result);
  return result;
}

function buildTrie(words) {
  const trie = new Trie();

  words.forEach(word => {
    let current = trie;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (current.next[c] === undefined) {
        current.next[c] = new Trie();
      }
      current = current.next[c];
    }
    current.word = word;
  });

  return trie;
}

function Trie() {
  this.next = {};
  this.word = null;
}
