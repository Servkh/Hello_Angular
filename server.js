var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public/dist/public'));

app.listen(8000, function(){
    console.log("Running on 8000");
})