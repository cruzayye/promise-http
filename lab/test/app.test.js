const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/rickMorty.js');

describe('app', () => {
  it('gets character by id', () => {
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

});
