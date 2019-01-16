const http = require('http');
const { parse } = require('url');
const bodyParser = require('./bodyParser');

const notes = {};
module.exports = (req, res) => {
  const url = parse(req.url, true);
  console.log(url.query.name);
  if(req.method === 'POST' && url.pathname === '/note') {
      bodyParser(req)
        .then(body => {

        })
    
  }
}


//////////rick and morty api

module.exports = id => {
  return request
    .get('http:/....')
    .then(res => ({
      name: res.body.name,
      species: res.body.species,
      status: res.body.status
    }));
}
