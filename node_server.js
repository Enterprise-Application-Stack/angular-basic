/*
need to run:
npm install connect serve-static
node node_server.js
*/

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8888, function(){
    console.log('Server running on 8888...');
});