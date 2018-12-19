const request = require('supertest');
const { assert } = require('chai');

const { app } = require('./server');

describe('SERVER TESTS', () => {
  
  describe('ROOT TESTS', () => {
    it('should res.body.error', done => {
      request(app)
        .get('/')
        .expect(res => {
          assert.property(res.body, 'error');
        })
        .end(done);
    });
  });

  describe('USERS TESTS', () => {
    it('should return an array of users', done => {
      request(app)
        .get('/users')
        .expect(res => {
          assert.equal(res.status, 200);
        })
        .expect(res => {
          assert.typeOf(res.body, 'array');
          assert.equal(res.body.length, 3);
          assert.equal(res.body[0].firstName, 'Kim');
          assert.typeOf(res.body[0].age, 'number');
        })
        .end(done);
    });
  });
});
