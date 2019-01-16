const { 
  getCharacter,
  getCharacters 
} = require('../lib/rickMorty');

describe('service', () => {
  it('gets character', ()=> {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });

  it('gets a list of characters', ()=> {
    return getCharacters()
      .then(characters => {
        expect(characters).toHaveLength(20);
      })
  })
});
