const fsPromises = require('fs').promises;

//this form of xporting a module is more like a function and when we import the module through require(./copy) the user can name this whatever.  
module.exports = (src, dst) => {
  return fsPromises.readFile(src)
    .then(data => {
      fsPromises.writeFile(dst, data)
    })
    .catch(err => console.error(err));
}
