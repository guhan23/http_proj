var fs =require('fs');
var qs = require('querystring')

function home(req,res){

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fs.readFileSync('./sample.html'));
    res.end()
}

function submit(req,res){
    let realData =0;

    req.addListener("data",function (chunk) {
        realData+=chunk
        
    });

    req.on('end',function () {
        
        real =qs.parse(realData)
    
        if( real !== null || real !== undefined){
            
        let str ='<!DOCTYPE html>'+
        '<html>'+
            '<head>'+
                '<title>'+
                    'Form request Api sample'+ 
                '</title>'+
                '<h1 style="text-align: center;">Your Name</h1>'+
               '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>'+
                '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">'+
            '</head>'+
            '<body style="background-color: lightseagreen ;">'+

                '<div class="container" style="display: block; align-content: center;">'+
                  '<h2 tyle="text-align: center; padding-top:"100px">'
                      + real["0fname"] + "  " +real["lname"]+
                  '</h2>'+
              '</div>'+
            '</body>'+      
        '</html>'

        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(str);
        res.end()

        }

        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("NO DATA found");
            res.end()
        }
        
    })

}

exports.home = home;
exports.submit = submit;