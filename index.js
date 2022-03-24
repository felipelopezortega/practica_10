var express = require("express"); //importamos la dependencia
var app = express () //declaramos una App de Express

var port = process.env.PORT || 3000; //setteamos el puerto para que escuche al servidor

//primera ruta (está al nivel de la raíz/), Hello World!

app.get("/", function(req, resp){

    resp.send("<html><head></head><body><h1>Hello World!</h1></body></html>")
});

app.listen(port) //levantar el server y ponerlo a la escucha