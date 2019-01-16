const fsPromises = require('fs').promises;

const read = src => fsPromises.readFile(src, { encoding: 'utf8' });


const removeCaps = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    })
    .join('');
}

const makeLettersCaps = str => str.toUpperCase();

const reverse = str => str.split('').reverse().join('');

const trim = str => str.trim(){



module.exports = {
  removeCaps,
}