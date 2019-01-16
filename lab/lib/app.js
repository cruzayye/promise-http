const { parse } = require('url');
const {
  getCharacter,
  getCharacters
} = require('./rickMorty')
const bodyParser = require('./bodyParser');
module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/characters')) {
    const id = url.pathname.slice(1).split('/')[1];
    getCharacters()
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body></body></html>');
      })
      .catch(err => {
        res.statusCode =500;
        res.end(`Error ${err}`);
      })


  }
}
//this file takes a series of if statements that interpret the url. 
// let noteId = 0;
// const notes = {};

// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   console.log(url.query.name);
//   if(url.pathaname.includes('/character/')){
//     const id = url.pathname.slice(1).split('/')[1];
//     getCharacter(id)
//       .then(character => {
//         res.setHeader('Content-Type', '')
//         res.end(JSON.stringify(character));
//       })
//   }
//   if(req.method === 'POST' && url.pathname === '/note') {
//       bodyParser(req)
//         .then(body => {
//           notes[noteId++] = body;
//           res.statusCode = 204;
//           res.end();
//         })
//         .catch(err => {
//           res.statusCode = 500;
//           res.end(`Error ${err}`);
//         })
//   }
// }


