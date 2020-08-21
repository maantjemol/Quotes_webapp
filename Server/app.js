const express = require('express');
const app = express();
const quote = require('./get_quote')


app.get('/api/quote', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  // console.log(`serving ${req.params.words} words`);
  //creating the response quote from get_quote.js:
  _quote = JSON.stringify({quote: quote.ran_quote("./quotes.txt")})
  res.send(_quote);
  console.log(`HTTP Get request recieved, send JSON: ${_quote}`)
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});

