const request = require('request');

const weather = (lat, lon) => {
  const KEY = 'af5907d053ba8eeaee183812ba607a11';
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}`;

  return new Promise((resolve, reject) => {
    request(
      {
        url: url,
        json: true
      },
      (error, response, body) => {
        if (error) {
          console.log('========================');
          console.log('Something went wrong!');
          console.log('========================');
          reject(error);
        }

        switch (response.statusCode) {
          case !200:
            reject(body.message)
          case 200: {
            const description = body.weather[0].description;
            const temp = body.main.temp;
            const pressure = body.main.pressure;
            const humidity = body.main.humidity;

            resolve({
              description,
              temp,
              pressure,
              humidity
            });
          }
          default:
            return;
        }
      }
    );
  });
};

module.exports = {
  weather
};
