var express = require('express') //referencing express
var app = express() //referencing the express framework
var eventRouter = express.Router() //Instantiating the event router
var fs = require('fs') //for parsing json files
var port = process.env.PORT || 3000 //this is a cloud 9 environment variable to find the port hosted on
var qouteJson = require("./src/data/quotes.json") //Quote data file

var quoteRouter = require('./src/routes/quoteRouter.js')

// adding static resource directories to the scope of app.js 
app.use(express.static('public'))

// Templating set-up
app.set('views', './src/views')
app.set('view engine', 'ejs')

// Telling the server which port to listen on
app.listen(port, function(err){
    console.log("Server is running on port: " + port)
})

// Setting up routing 
app.use('/quotes', quoteRouter)

// Resonding to root request using EJS templating
app.get('/', function(req, res){
    res.render('index', {
        nav: [{ link : "http://systemslife.net/" , text : "Systems Life"}/* 
              { link : "home", text : "Home" },
              { link : "sign-Up", text : "Sign-Up"},
              { link : "log-In", text : "Log-in"},
              { link : "events", text : "Events"}]*/],
        quotes : qouteJson ,
        movieOrShow : movieOrShow
    })
})

//displays either a movie or a show
function movieOrShow(movie, show)  {

    if (show != "" )  {
    
        return show
    } else if (movie != "" ) {
    
        return movie
    } else {
    
        return "No movie listed"
    }
}