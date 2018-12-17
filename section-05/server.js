const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

/////////
// HBS //
/////////
app.set('view engine', 'hbs');

//////////////////
// HBS REGISTER //
//////////////////

//////////////
// PARTIALS //
//////////////
hbs.registerPartials(__dirname + '/views/partials');

/////////////
// HELPERS //
/////////////
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
  return `${text.toUpperCase()}!!!`;
})

////////////////
// MIDDLEWARE //
////////////////
app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;
  fs.appendFileSync('server.log', log + '\n');
  next();
});

app.use((req, res, next) => {
  res.render('maintenance.hbs');
});

app.use(express.static(__dirname + '/public'));

////////////
// ROUTES //
////////////
app.get('/', (req, res) => {
  res.render('index.hbs', {
    pageTitle: 'Home page',
    message: 'Welcome to my homepage'
  })
});

app.get('/bad', (req, res) => {
  res.send({ errorMessage: 'Something went wrong!' });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
