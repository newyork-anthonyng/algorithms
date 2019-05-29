function isSubstring(str1, str2) {
  return str1.includes(str2);
}

function stringRotation(str1, str2) {
  if (str1 === str2) return true;

  if (str1.length !== str2.length) return false;

  let isStartIndex = undefined;

  for (let i = 0; i < str2.length; i++) {
    // check where str2 contains str1's beginning

    isStartIndex = i;
    let index = 0;
    while(str2[i + index] !== undefined) {
      if (str1[index] !== str2[i + index]) {
        isStartIndex = undefined;
        break;
      }
      index++;
    }

    if (isStartIndex !== undefined) {
      break;
    }
  }

  if (isStartIndex !== undefined) {
    return isSubstring(str1, str2.slice(0, isStartIndex));
  }
  return false;
}

console.assert(
  stringRotation("waterbottle", "erbottlewat") === true,
  "waterbottle is a rotation of erbottlewat"
);
console.assert(
  stringRotation("wwaterbottle", "werbottlewat") === false,
  "wwaterbottle is not a rotation of werbottlewat"
);
console.assert(
  stringRotation("anthonyngisgreat", "ngisgreatanthony") === true,
  "anthonyngisgreat is a rotation of ngisgreatanthony"
);
