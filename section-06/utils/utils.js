const add = (a, b) => a + b;
const square = a => a * a;
const asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};
const asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a * a);
  }, 1000);
};

module.exports = {
  add,
  square,
  asyncAdd,
  asyncSquare
};
