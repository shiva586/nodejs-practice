const http=require("http");
http.createServer(function (request,response){


    response.write("Hello Barath");
    response.end();

}).listen(5001)
