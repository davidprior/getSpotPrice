
const getSpotPriceBTC = async (event) => {

    let dataString = '';

    const response = await new Promise((resolve, reject) => {
        let url = event.symbol ? "https://api.binance.com/api/v3/ticker/price?symbol=".concat(event.symbol) : "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";

        const request = https.get(url, function (result) {
            result.on('data', chunk => {
                dataString += chunk;
            });
            result.on('end', () => {
                resolve({
                    statusCode: 200,
                    body: JSON.parse(dataString)
                });
            });
        });

        request.on('error', (e) => {
            reject({
                statusCode: 500,
                body: 'Something went wrong!'
            });
        });
    });

    return response;

};

const https = require('https');
exports.handler = getSpotPriceBTC;
