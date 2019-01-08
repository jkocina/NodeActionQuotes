var express = require('express');
var app = express();

var port = process.env.PORT; //this is a cloud 9 environment variable to find the port hosted on

app.listen(port, function(err){
    console.log("Server is running on port: " + port);
});