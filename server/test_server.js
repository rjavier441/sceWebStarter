"use strict";

var http = require("http");
const express = require("express");
const app = express();

var port = 8080;

app.use(express.static(`${__dirname}/public`));

app.get("/", function (request, response) {
	response.set("Content-Type", "text/html");
	response.sendFile("index.html").status(200).end();
});

var server = http.createServer(app);
server.listen(port, function () {
	console.log(`Now listening at port ${port}`);
});