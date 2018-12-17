const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.options({
  c: {
    demand: true,
    alias: 'city',
    describe: 'City to fetch weather for',
    string: true
  }
}).argv;

const cityQuery = encodeURIComponent(argv.city);

geocode.geocode(cityQuery)
  .then((res) => {
    weather.weather(res.lat, res.lon)
      .then((res) => {
        console.log(res);
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

// weather.weather()
