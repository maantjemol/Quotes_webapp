const express = require('express');
const app = express();
const quote = require('./get_quote')


app.get('/api/quote', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  console.log(`serving ${req.params.words} words`);
  //creating the response quote from get_quote.js:
  res.send(JSON.stringify({quote: quote.ran_quote("./quotes.txt")}));
  console.log("HTTP Get request recieved")
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000');
});

