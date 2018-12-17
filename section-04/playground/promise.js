const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hey, it works!');
    reject('Something went wrong');
  }, 2500);
});

somePromise.then((message) => {
  console.log(message);
}).catch(err => console.log(err));