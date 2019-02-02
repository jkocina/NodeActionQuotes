var express = require('express');
var app = express();

var port = process.env.PORT; //this is a cloud 9 environment variable to find the port hosted on
var eventRouter = express.Router();

/*
a server request will search this first for a resource. If its not found it will 
continue on with the rest of the requests 

this section is to create static directories
*/

app.use(express.static('public'));
// remove thanks to templating app.use(express.static('src/views'));

//Setting up the reauirements to use the templating engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

eventRouter.route('/')
    .get(function(req, res){
        res.send('Hello Events!');
    })
    
eventRouter.route('/event')
    .get(function(req, res){
        res.send('Hello Single Event');
    })
    
app.use('/events', eventRouter);

//handling the root dir
app.get('/', function(req, res){
    //res.send('Bench Press');
    res.render('index', {
        list: ['first val','second val','third val'],
        nav: [{ link : "http://systemslife.net/" , text : "Systems Life"}]
              /*{ link : "home", text : "Home" },
              { link : "sign-Up", text : "Sign-Up"},
              { link : "log-In", text : "Log-in"},
              { link : "events", text : "Events"}]*/
    });
});

app.get('/routing', function(req, res){
    //res.sendFile(path.resolve('../public/index.html', {root: __dirname}));
    res.send('the routing route');
});

app.listen(port, function(err){
    console.log("Server is running on port: " + port);
});