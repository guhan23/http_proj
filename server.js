var http = require('http')
var url =require('url')

function serverFunc(handler,pages,routes){

function servFun(req,res){
         var name = url.parse(req.url).pathname;
 
         let x =name.toLocaleLowerCase();

         routes.route(handler,req,res,x,pages)

}
  http.createServer(servFun).listen(8000);
  console.log("Server running at 8000...")
}

exports.server = serverFunc;

