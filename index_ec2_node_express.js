const https = require('https');
const express = require('express');
const app = express();

app.get('/', (req,res) =>{
 https.get({
    hostname: 'api.binance.com',
    path:     '/api/v3/ticker/price?symbol=BTCUSDT'
  }, response => {
    let body = ''
    response.on('data', part => body += part)
    response.on('end', () => {
     res.setHeader('Content-Type', 'application/json');
     res.end(body);
    })
  })

})
var port = 80;
app.listen(port);
console.log('Listening on port', port);
