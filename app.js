
/**
 * Module dependencies.
 */
var express = require('express') 
var routes = require(__dirname+'/routes');
var port=3001;

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
app.get('/',routes.index);
app.get('/index',routes.index);
app.get('/search',routes.search);
app.get('/test',routes.test);


app.listen(port);
console.log("Express server listening on port %d",port);
