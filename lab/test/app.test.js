const request = require('supertest');
const app = require('../lib/app');


jest.mock('../lib/rickMorty.js');

describe('app', () => {
 
  it('gets character by id', () => {
    //why request(app)?
    return request(app)
      .get('/character/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchez',
          species: 'Human',
          status: 'Alive'
        });
      });
  });
  it('saves a note for a character', () => {
    return request(app)
      .post('/characters')
      .responseType({ chracterId: 1, note: 'Great character' })
      .then(res => {
        expect(res.status).toEqual(200);
      });
  });

});
