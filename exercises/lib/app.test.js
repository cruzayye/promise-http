const request = require('supertest');
const app = require('../lib/app');

describe('app', ()=> {
  it('has a testing rout', () => {
    return request(app)
      .post('/you')
      .get('/tester')
      .then(res => {
        expect(res.body).toEqual({ hi: 'there ryan'});
      })
  })
})