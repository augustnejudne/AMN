const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: jest.fn()
  };

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    // const spy = expect.createSpy();
    const spy = jest.fn();
    spy('Kim', 30);
    expect(spy).toHaveBeenCalledWith('Kim', 30 );
    // spy();
    // expect(spy).toHaveBeenCalled();
  });

  it('should call saveUser with user object', () => {
    const email = 'kim@test.com';
    const password = '143212';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});