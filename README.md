# What It Is
IOT planting prototype app using Arduino and some sensors like soil moisture sensor which send the data to Node.js server via router and socket.io allowing us to track and visualize the data on a web page.

# How It Works

## Arduino
### Circuit
![Circuit_](https://user-images.githubusercontent.com/28137165/88451796-05542300-ce5a-11ea-8e68-c32b07ee9f83.png)

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
