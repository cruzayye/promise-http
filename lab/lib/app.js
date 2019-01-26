
const { parse } = require('url');
const bodyParser = require('./bodyParser');
const {
  getCharacters,
  getCharacter
} = require('./rickMorty.js');

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
  } else if(req.method === 'GET' && url.pathname.includes('/characters')) {
    getCharacters()
      .then(characters => {
        const character = setCharacters(characters).map(ele => ele);
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><ul>${character}</ul></body></html>`);
      });
  }
};

const setCharacters = arr => {
  return arr.map(char => {
    return `<li> name: ${char.nam}, Status: ${char.status}, Species: ${char.species}</li>`;
  });
};
