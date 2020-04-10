function subdomainVisits(cpdomains) {
  const obj = {};

  for (let i = 0; i < cpdomains.length; i++) {
    let current = cpdomains[i].split(' ');
    let [count, domain] = current;

    let subdomains = applesauce(domain);

    for (let j = 0; j < subdomains.length; j++) {
      if (obj[subdomains[j]] === undefined) obj[subdomains[j]] = 0;

      obj[subdomains[j]] += +count;
    }

  }

  const keys = Object.keys(obj);
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    result.push(`${obj[keys[i]]} ${keys[i]}`);
  }

  return result;
}

function applesauce(domain) {
  const result = [];
  const domainArray = domain.split('.');

  let previousString = '';
  for (let i = domainArray.length - 1; i >= 0; i--) {
    previousString = domainArray[i] + previousString;
    result.push(previousString);

    previousString = '.' + previousString;
  }

  return result;
}

let input = ['9001 discuss.leetcode.com']
let output = subdomainVisits(input);
console.log(output);