const { parse } = require('url');
const bodyParser = require('./bodyParser');

let noteId = 0;
const notes = {};

module.exports = (req, res) => {
  const url = parse(req.url, true);
  console.log(url.query.name);
  if(req.method === 'POST' && url.pathname === '/note') {
      bodyParser(req)
        .then(body => {
          notes[notId++] = body;
          res.statusCode = 204;
          res.end();
        })
  }
}


