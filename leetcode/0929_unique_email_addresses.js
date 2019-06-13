// https://leetcode.com/problems/unique-email-addresses/

function numUniqueEmails(emails) {
  const uniqueEmails = emails.reduce((accumulatedHash, email) => {
    const normalizedEmail = normalizeEmail(email);

    accumulatedHash[normalizedEmail] = true;
    return accumulatedHash;
  }, {});

  return Object.keys(uniqueEmails).length;
}

function normalizeEmail(email) {
  const splitEmail = email.split("@");
  const domainName = splitEmail[1];

  let localName = splitEmail[0];
  localName = localName.split("+")[0];
  localName = localName.replace(/\./g, "");

  return `${localName}@${domainName}`;
}

let input = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];

let expectedOutput = [
  "testemail@leetcode.com",
  "testemail@lee.tcode.com"
];

let result = numUniqueEmails(input);
console.log(result);
