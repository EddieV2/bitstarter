var express = require('express');

var app = express.createServer(express.logger());
	
var buffer = new buffer ("Hello World from index.html", "utf-8");

app.get('/', function(request, response) {
	var fs = require('fs');
    fs.readFileSync("index.html");
    console.log(buffer.toString('utf-8'));
 });

var port = process.env.PORT || 5000;
app.listen(port, function() {
console.log("Listening on " + port);
});
