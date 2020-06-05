function route(handler,req,res,x,pages){
      if(x === pages['/']){
          handler.home(req,res);
      }
      else if(x === pages["submit"]){
          handler.submit(req,res);
      }
      else{
          res.writeHead(404,{"Content-Type":"text/plain"});
          res.write("404 Error Page not found")
      }
}

exports.route = route;