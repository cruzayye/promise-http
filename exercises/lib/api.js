const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    return res.body.request.map( character => {
      character.orgin.url;
      filter(originUrl => originUrl !== '')    
    })
  })