const request = require('request');
const fs = require('fs');

const geocode = city => {
  const KEY = 'af5907d053ba8eeaee183812ba607a11';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},ph&APPID=${KEY}`;
  return new Promise((resolve, reject) => {
    request(
      {
        url: url,
        json: true
      },
      (error, response, body) => {
        fs.writeFileSync('data.txt', JSON.stringify(response, undefined, 2));
        if (error) {
          reject(error);
        }
        // console.log(response.statusCode);
        switch (response.statusCode) {
          case 404:
            reject(body.message);
            break;
          case 200: {
            const city = body.name;
            const country = body.sys.country;
            const lon = body.coord.lon;
            const lat = body.coord.lat;
            resolve({
              city,
              country,
              lon,
              lat
            });
            break;
          }
          default:
            return;
        }
      }
    );
  });
};

module.exports = {
  geocode
};
