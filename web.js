var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var index =  fs.readFileSync('index.html', 'utf-8');
app.get('/', function(request, response) {
    response.send('hello');
 });

var port = process.env.PORT || 5000;
app.listen(port, function() {
console.log("Listening on " + port);
});
