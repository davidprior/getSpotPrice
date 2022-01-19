## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [How To](#how-to)

### General Info
***
EndPoint URL: (https://yh2imt1tof.execute-api.eu-west-1.amazonaws.com/produccion/get-spot-price)

This Function get Spot Price from Binance API: (https://binance-docs.github.io/apidocs/spot/en/#change-log)

## Technologies
***

* [Node.js 14.x](https://nodejs.org/en/blog/release/v14.0.0/): Version 14.0 
* [AWS Lambda](https://aws.amazon.com/es/lambda/)
* [AWS API gateway](https://aws.amazon.com/es/api-gateway/)
## How To
***
Test API, implement POST call from Postman
```
paths:
  https://yh2imt1tof.execute-api.eu-west-1.amazonaws.com/produccion/get-spot-price:
    post:
      summary: Returns the Spot Price from https://binance-docs.github.io/apidocs/spot/en/#change-log, default BTCUSDT
      consumes:
        - application/json
    parameters:
      - in: body
        name: symbol
        required: false
    responses:
      200:
        description: ok
```

