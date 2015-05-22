var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync(__dirname + '/sslcert/server.key', 'utf8');
var certificate = fs.readFileSync(__dirname + '/sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/../'));
app.use('/test', express.static(__dirname + '/static/juli/index.html'));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(7170);
//httpsServer.listen(443);