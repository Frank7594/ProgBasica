document.addEventListener("keydown",moverFlechas);
document.addEventListener("keydown", moverTeclas);
var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var xic = aleatorio(0, 420);
var yic = aleatorio(0, 420);
var xiv = aleatorio(0, 420);
var yiv = aleatorio(0, 420);
var velocity = 15;

var fondo ={
    URL:"tile.png",
    cargaOK: false
};
var vaca ={
    URL:"vaca.png",
    cargaOK: false,
    posX: xiv,
    posY: yiv
};
var cerdo ={
    URL:"cerdo.png",
    cargaOK: false,
    posX: xic,
    posY: yic
};
var pollo ={
    URL:"pollo.png",
    cargaOK: false
};
var flechas= {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var teclas={
    W: 87,
    A: 65,
    S: 83,
    D: 68
}

var cantidadPollo = aleatorio(10,50);

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
        var x= 100;
        var y= 100;
        papel.drawImage(vaca.imagen,vaca.posX,vaca.posY);

    }
   if(cerdo.cargaOK){
        var x= 250;
        var y= 250;
        papel.drawImage(cerdo.imagen,cerdo.posX,cerdo.posY);
        
    }
    if(pollo.cargaOK){
        for(var p=0;p<cantidadPollo;p++){
            var x= aleatorio(0,7);
            var y= aleatorio(0,10);
            var x = x*60;
            var y = y*40;
            papel.drawImage(pollo.imagen,x,y);
        }
    }
}
function moverFlechas(evento){
    switch(evento.keyCode){
        case flechas.DOWN:
            if (cerdo.posY < vp.width - 80) {
                cerdo.posY = cerdo.posY + velocity;
                clear();
                dibujar();
            }     
        break;
        case flechas.UP:
            if (cerdo.posY > 0) {
                cerdo.posY = cerdo.posY - velocity;
                clear();
                dibujar();
            }
        break;
        case flechas.RIGHT:
            if(cerdo.posX < vp.width - 80){
                cerdo.posX = cerdo.posX + velocity;
                clear();
                dibujar();
            }
        break;
        case flechas.LEFT:
            if (cerdo.posX > 0) {
                cerdo.posX = cerdo.posX - velocity;
                clear();
                dibujar();
            }
        break
    }
}

function moverTeclas(event){
    switch(event.keyCode){
        case teclas.S:
            if (vaca.posY < vp.width - 80) {
                vaca.posY = vaca.posY + velocity;
                clear();
                dibujar();
            }     
        break;
        case teclas.W:
            if (vaca.posY > 0) {
                vaca.posY = vaca.posY - velocity;
                clear();
                dibujar();
            }
        break;
        case teclas.D:
            if(vaca.posX < vp.width - 80){
                vaca.posX = vaca.posX + velocity;
                clear();
                dibujar();
            }
        break;
        case teclas.A:
            if (vaca.posX > 0) {
                vaca.posX = vaca.posX - velocity;
                clear();
                dibujar();
            }
        break
    }
}a
function aleatorio(min, max){
    var result;
    result =  Math.floor(Math.random()*(max - min +1))+min;
    return result;
}
function clear(){
    papel.clearRect(0, 0, vp.width, vp.height);
    dibujar();
}