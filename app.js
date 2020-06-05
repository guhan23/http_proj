var SERVER = require('./server');
var HANDLER = require('./handlers');
var ROUTE = require('./routers');

pages ={};
pages["/"] = "/"
pages["submit"] = "/submit"

SERVER.server(HANDLER,pages,ROUTE);