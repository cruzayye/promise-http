const request = require('superagent');

const getCharacter = id => {
  request
    .get(`https://rickandmortyapi.com/api/character/${id}`)

}

module.exports = getCharacter;