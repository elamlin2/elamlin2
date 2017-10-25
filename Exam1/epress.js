var express = require('express');

module.exports = function (app, config) {

  app.use(function (req, res, next) {
    console.log('Request from ' + req.connection.remoteAddress);
    next();
  });  

module.exports = function (app, config) {

  app.use(function (req, res, next) {
    console.log('Request from ' + req.connection.remoteAddress);
    next();
  });  


module.exports = function (app, config) {

  app.use(function (req, res, next) {
    console.log('Request from ' + req.connection.remoteAddress);
    next();
  });  


module.exports = function (app, config) {

  app.use(function (req, res, next) {
    console.log('Request from ' + req.connection.remoteAddress);
    next();
  });  


app.use(express.static(path.normalize(__dirname) + '/public'));

app.use(function(req, res){
  console.log('Request from ' + req.ip);
});

app.get('/',function(req,res){
	res.send('Hello World!');
});

http.createServer(app).listen(3000, function(){
	console.log('Express server listening on port ' + 3000);
})


//If plan text isnt an input or server interuption,the following errors below will display. 
//404 will appear when the server could not find what was requested.
//505 error will display when an execution has failed in the server 
{
app.use(express.static(config.root + '/public'));

  app.use(function (req, res) {
    res.type('text/plan');
    res.status(404);
    res.send('404 Not Found');
  });

  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plan');
    res.status(500);
    res.send('500 Sever Error');
  });

  console.log("Starting application");

};