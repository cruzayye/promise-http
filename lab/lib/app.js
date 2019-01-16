// const { parse } = require('url');
// const {
//   getCharacter,
//   getCharacters
// } = require('./rickMorty');

// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   if(url.pathname.includes('/characters')) {
//     const id = url.pathname.slice(1).split('/')[1];
//     getCharacters()
//       .then(characters => {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<html><body></body></html>');
//       })
//       .catch(err => {
//         res.statusCode = 500;
//         res.end(`Error ${err}`);
//       });


//   }
// };

