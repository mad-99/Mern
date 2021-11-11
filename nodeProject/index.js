 var express = require('express');
// const { read } = require('fs');
// var http = require('http');
// var m ="mca"
// http.createServer(function(request,response){
//     request.Send('<h1 style="color:red;">madhur maheshwari</h1>'+m);
// }).listen(3000);
var app = express();
app.get('/',function(reqest,response){
    console.log("HELLO ALL ");
    var x=10;
    var y=20;
    var c=x+y;
    response.send('<font color="red"> Welcome to Express </font>' + c);

    response.end(c);
})

app.listen(process.env.port||4000,function(error){
    if(error)
    {
        console.log(error);
    }
    else
    {
    console.log("Express is running on port 3000");
    }
}) 