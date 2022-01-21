var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var fondo ={
    URL:"tile.png",
    cargaOK: false
};
var vaca ={
    URL:"vaca.png",
    cargaOK: false
};
var cerdo ={
    URL:"cerdo.png",
    cargaOK: false
};
var pollo ={
    URL:"pollo.png",
    cargaOK: false
};

var cantidadVaca = aleatorio(2,6);
var cantidadCerdo = aleatorio(1,10);
var cantidadPollo = aleatorio(10,20);

fondo.imagen = new Image();
fondo.imagen.src = fondo.URL;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.URL;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.URL;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.URL;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca(){
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdo(){
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollo(){
    pollo.cargaOK = true;
    dibujar();
}

function dibujar(){
   if(fondo.cargaOK){
       papel.drawImage(fondo.imagen,0,0);
    }
   if(vaca.cargaOK){
        for(var v=0;v<cantidadVaca;v++){
            var x= aleatorio(0,7);
            var y= aleatorio(0,7);
            var x = x*60;
            var y = y*60;
            papel.drawImage(vaca.imagen,x,y);
       }
    }
   if(cerdo.cargaOK){
        for(var c=0;c<cantidadCerdo;c++){
            var x= aleatorio(0,7);
            var y= aleatorio(0,7);
            var x = x*60;
            var y = y*60;
            papel.drawImage(cerdo.imagen,x,y);
        }
    }
    if(pollo.cargaOK){
        for(var p=0;p<cantidadPollo;p++){
            var x= aleatorio(0,7);
            var y= aleatorio(0,7);
            var x = x*60;
            var y = y*60;
            papel.drawImage(pollo.imagen,x,y);
        }
    }
}

function aleatorio(min, max){
    var result;
    result =  Math.floor(Math.random()*(max - min +1))+min;
    return result;
}
