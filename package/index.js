var express = require('express');			// include express.js
var app = express();						// a local instance of it
var bodyParser = require('body-parser');	// include body-parser

var http = require('http').createServer(app);

var io = require('socket.io')(http);

// Send index.html page on GET /
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));

// you need a  body parser:
app.use(bodyParser.urlencoded({ extended: false })); // for application/x-www-form-urlencoded


// this is the POST handler:
app.all('/*', function (request, response) {
	console.log('Got a ' + request.method + ' request');
	// the parameters of a GET request are passed in
	// request.body. Pass that to formatResponse()
	// for formatting:
	// console.log(request.headers);

	// Moisture (Need your own calibration)
	const moistureOrigin = request.body.moistureLevel;
	const moistureDisplayed = Math.round((692 - moistureOrigin) / 440 * 100);
	
	// Light (Need your own calibration)
	const lightOrigin = request.body.lightLevel;
	const lightDisplayed = 1200 - lightOrigin;

	// Temp (Need your own calibration)
	const tempOrigin = request.body.tempLevel;
	const tempDisplayed = Math.round(tempOrigin - 210);

	if (request.method == 'GET') {
		console.log(request.query);

	} else {
		console.log("Moisture is:" + request.body.moistureLevel);
		console.log("Light is:" + request.body.lightLevel);
		console.log("Temp is:" + request.body.tempLevel);
		io.emit('moistureLevel', moistureDisplayed);
		io.emit('lightLevel', lightDisplayed);
		io.emit('tempLevel', tempDisplayed);
	}

	// send the response:
	response.send('OK');
	response.end();

});


// start the server:
//var server = app.listen(8080, serverStart);
http.listen(8080, () => {
	console.log('Hey now it is listening on *:8080');
});