
const { parse } = require('url');
const bodyParser = require('./bodyParser');
const {
  getCharacter,
  // getCharacters
} = require('./rickMorty');

const notes = {};

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/character')) {
    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(id)
      .then(character => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
  } 
  else if(req.method === 'POST' && url.pathname.includes('/characters')) {
    bodyParser(req)
      .then(({ characterId: id, note }) => {
        if(notes[id]) {
          notes[id].push(note);
        } else {
          notes[id] = [note];
        }
        res.statusCode = 200;
        res.end();
      });
  }
};
