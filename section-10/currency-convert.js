// CONVERT USD TO PHP
// the argument will look like
// 10 USD PHP

const axios = require('axios');

const fixerAPIKey = '0d43ffb7aff84b1b091332cdfa387ada';
const fixerURL = `http://data.fixer.io/api/latest?access_key=${fixerAPIKey}`;

// CONVERSION FORUMULA
// dollars = 1 / amount in dollars
// dollars * pesos

// ARGUMENTS
const amount = process.argv[2];
const fromCurrency = process.argv[3];
const toCurrency = process.argv[4];

const getRate = async (symbol) => {
  const symbolUpperCase = symbol.toUpperCase();
  return axios.get(`${fixerURL}&symbols=${symbolUpperCase}`)
    .then(d => {
      const rate = d.data.rates[symbolUpperCase];
      return rate;
    })
    .catch(e => console.log(e));
};

const convert = async (amount, cur1, cur2) => {
  const cur1Rate = await getRate(cur1);
  const cur2Rate = await getRate(cur2);

  return amount * cur2Rate / cur1Rate;
};

convert(amount, fromCurrency, toCurrency)
  .then(result => {
    console.log(`${amount} ${fromCurrency} is ${result.toFixed(2)} ${toCurrency}`);
  });