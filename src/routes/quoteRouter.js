var express = require('express');

var quoteRouter = express.Router();

quoteRouter.route('/') //Routing to the root of the quote page
    .get(function(req, res){
      res.render('quotes', {
        list: ['first val','second val','third val'],
        nav: [{ link : "http://jacobkocina.com/" , text : "Systems Life"}]
              /* Future features
              { link : "home", text : "Home" },
              { link : "sign-Up", text : "Sign-Up"},
              { link : "log-In", text : "Log-in"},
              { link : "events", text : "Events"}]*/
      })
    })

quoteRouter.route('/add') //Routing to the add a quote page    
    .get(function(req, res){
        res.send('Hello add a quote')
    })
    
module.exports = quoteRouter;