const copy = require('./copy');
const fsPromises = require('fs').promises;


describe('copy', ()=> {
  it('copies a file', () => {
    return copy('./promises.md', './promise-copy.md')
      .then(() => {
          
      return Promise.all([
        fsPromises.readFile('./promises.md'),
        fsPromises.readFile('./promise-copy.md')
      ])
      })
      .then(([promiseJs, promiseJsCopy]) => {
        expect(promiseJs).toEqual(promiseJsCopy)
      })
      .catch(err => expect(err).toBefalsy);
  });
});