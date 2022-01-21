var express = require("express");
var app = express();

app.get("/", inicio)
app.get("/cursos", cursos);

function inicio(peticion, resultado){
    resultado.send("<strong>Hola Sandoooo!!</strong>")


} 

function cursos(peticion, resultado){
    resultado.send("Estos son los <strong>Cursos</strong>")
} 


app.listen(8989);