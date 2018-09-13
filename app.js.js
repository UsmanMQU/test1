var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/user/:user', function(req, res){
  res.cookie('name', req.params.user).send('<p>Cookie set: <a href="/user">View Here</a>');
});


app.get('/user', function(req, res){
  res.send(req.cookies.name);
  res.clearCookie('name')
});
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port' + app.get('port'));
});
