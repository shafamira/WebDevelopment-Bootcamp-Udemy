/////////////////////////////////
// (17) Strings and Template Literals
const firstName = 'Shafa';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const shafa = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(shafa);

const shafaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(shafaNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);