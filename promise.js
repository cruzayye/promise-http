const fsPromises = require('fs').promises;


//pending -> waiting for promise to finish
//after pending it either fullfills or rejects teh promise. 
fsPromises.readFile('./promises.md', { encoding: 'utf8' })
    .then(data => console.log(data))
    .catch(err => console.error(err));

///////WRITE TO A FILE
fsPromises.writeFile('example.txt','writing a file with fsPromieses?')
  .then(() => console.log('Done'))
  .catch(err => console.error(err));


/////////read and copy file
fsPromises.readFile('./promises.md', { encoding: 'utf8' })
  .then(data => {
    fsPromises.writeFile('copiedpromisejs.js', data)
  })
  .catch(err => console.err(err));


