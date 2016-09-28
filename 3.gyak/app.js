var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

nunjucks.configure('views', { //melyik mappaban vannak a sablonok
    express: app,
    autoescape: true
});

app.use(function(req,res,next){
    console.log(req.method + ' ' + req.url);
    next();
});

app.get('/hello/:name', function(req,res){ //url-bol szedi ki, hogy mi lesz a hello
    const nev = req.params.name;
    res.render('master.njk', { name: nev }); //fajlnev, name: sablon
});

app.use(express.static('public')); //public = mappanev

app.get('/', function(req,res){
    res.end('Hola')
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('Elindult a szerver');
});