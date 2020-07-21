# What It Is
IOT planting prototype app using Arduino and some sensors like soil moisture sensor which send the data to Node.js server via router and socket.io allowing us to track and visualize the data on a web page.

# How It Works

## Arduino
### Circuit
![Circuit for Arduino](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3bda552c-9150-49dc-ab79-6cf818fb41b1/Circuit_.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200721T044310Z&X-Amz-Expires=86400&X-Amz-Signature=298a0b6cf518a62712fb4a17745ec63a55b6d69de63f02a63bd113e981110d3e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Circuit_.png%22)

### Code
Configure your WiFi network in `arduino_secrets.h`.
```
#define SECRET_SSID "Your Router's SSID"
#define SECRET_PASS "Your Router's Password"
```
And enter your server address in `arduino_nodejs.ino`.
```
char serverAddress[] = "Your server address";
```

## Server
In 'package' directory
```
$ npm install
```
And then run the server
```
$ node index.js
```
And then you should be able to see the app from [http://localhost:8080](http://localhost:8080)
