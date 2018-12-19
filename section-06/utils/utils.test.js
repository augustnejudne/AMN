const { assert } = require('chai');
const { add, asyncAdd, square, asyncSquare } = require('./utils');

describe('UTILS', () => {
  it('should add two numbers', done => {
    const sum = add(2, 5);
    assert.typeOf(sum, 'number');
    assert.equal(sum, 7);
    done();
  });

  it('should square a number', done => {
    const product = square(5);
    assert.typeOf(product, 'number');
    assert.equal(product, 25);
    done();
  });

  it('should add two numbers after one second', done => {
    asyncAdd(2, 5, sum => {
      assert.typeOf(sum, 'number');
      assert.equal(sum, 7);
      done();
    });
  });

  it('should square a number after one second', done => {
    asyncSquare(5, product => {
      assert.typeOf(product, 'number');
      assert.equal(product, 25);
      done();
    });
  });
});
