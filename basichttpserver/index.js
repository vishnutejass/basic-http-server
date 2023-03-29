const http = require('http');
const port = 8003;
const fs = require('fs'); //used to reading or writing through files


function requestHandler(req, res ){
    console.log(req.url);
    res.writeHead(200,{'content-type': 'text/html'});

    let filePath;

    switch(req.url){
        case '/':
            filePath = './index.html'
            break;

        case '/profile':
            filePath = './profile.html'
            break;
        
        default:
            filePath = './404.html'
    }
    fs.readFile(filePath,function(err,data){
        if(err){
            console.log('error',err);
            return res.end('<h1>error!</h1')
        }

        return res.end(data);
    })

    // fs.readFile('./index.html',function(err,data){
    //      if(err){
    //         console.log('error',err);
    //         return res.end('<h1>Error!</h1>');

    //      }

    //      return res.end(data);
    // });
    //res.end('<h1>Gotcha!<h1>');
}

const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("server is up and running on port: ",port);

});