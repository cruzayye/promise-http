const { getCharacter } = require('../lib/rickMorty');

describe('service', () => {
  it('gets character', ()=> {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        })
      })
  })
});
