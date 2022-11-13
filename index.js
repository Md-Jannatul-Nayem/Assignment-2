var fs=require('fs');
var http=require('http');

var server=http.createServer(function(req,res){

    if(req.url=="/")
    {
        let data=fs.readFileSync('home.html','UTF8');
        res.end(data);

    }
    else if(req.url=="/contact")
    {
        let data=fs.readFileSync('contact.html','UTF8');
        res.end(data);
    }
    else if(req.url=="/about")
    {
        let data=fs.readFileSync('about.html','UTF8');
        res.end(data);
    }
    else if(req.url=="/terms")
    {
        let data=fs.readFileSync('terms.html','UTF8');
        res.end(data);

    }
    else if(req.url=="/resources")
    {

        let data=fs.readFileSync('resources.html','UTF8');
        res.end(data);
    }
    else if(req.url=="/events")
    {

        let data=fs.readFileSync('events.html','UTF8');
        res.end(data);
    }

});

server.listen(8080);
console.log("Server Run Successfully");