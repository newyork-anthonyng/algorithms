function isMatch(s, p) {
  if (!p) {
    return !s;
  }

  const firstMatch = !!s && ((s[0] === p[0]) || (p[0] === '.'));
  const handleKleeneStar = p.length >= 2 && p[1] === '*';

  if (handleKleeneStar) {
    return (isMatch(s, p.slice(2))) ||
      (firstMatch && isMatch(s.slice(1), p));
  } else {
    return firstMatch && isMatch(s.slice(1), p.slice(1));
  }
}

console.assert(isMatch('aa', 'a') === false);
console.assert(isMatch('aa', 'a.') === true);
console.assert(isMatch('ab', '.*c') === false);