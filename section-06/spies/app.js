var db = require('./db');

module.exports.handleSignup = (email, password) => {
  // check if email already exists
  // save the user to db
  db.saveUser({
    email,
    password
  });
  // send the welcome email
};
