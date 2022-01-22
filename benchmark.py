import requests, json
import datetime

url_ec2 = "http://ec2-54-78-25-238.eu-west-1.compute.amazonaws.com"
url_lambda = "https://dfc7nlf791.execute-api.eu-west-1.amazonaws.com/production/getSpotPriceBTC"

mysum = datetime.timedelta()

for i in range(1):
        result =  requests.get(url_ec2)
        mysum += result.elapsed

print ("Call time EC2:", mysum.total_seconds())


mysumLambda = datetime.timedelta()

for i in range(1):
        result =  requests.get(url_lambda)
        mysumLambda += result.elapsed

print ("Call time Lambda:", mysumLambda.total_seconds())
