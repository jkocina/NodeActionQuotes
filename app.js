var express = require('express');
var app = express();

var port = process.env.PORT; //this is a cloud 9 environment variable to find the port hosted on

/*
a server request will search this first for a resource. If its not found it will 
continue on with the rest of the requests 

this section is to create static directories
*/

app.use(express.static('public'));
// remove thanks to templating app.use(express.static('src/views'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

//handling the root dir
app.get('/', function(req, res){
    //res.send('Bench Press');
    res.render('index', {list: ['first val','second val','third val']});
});

app.get('/routing', function(req, res){
    //res.sendFile(path.resolve('../public/index.html', {root: __dirname}));
    res.send('the routing route');
});

app.listen(port, function(err){
    console.log("Server is running on port: " + port);
});