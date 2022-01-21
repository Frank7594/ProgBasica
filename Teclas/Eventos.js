var teclas= {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var c=document.getElementById("area_de_dibujo");
var papel = c.getContext("2d");
var y=150;
var x=150;

dibujarlinea("red",x-1,y-1,x+1,y+1,papel);


function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final, lienzo){
    lienzo.beginPath(); 
    lienzo.strokeStyle = color; 
    lienzo.lineWidth= 2; 
    lienzo.moveTo(x_inicial,y_inicial); 
    lienzo.lineTo(x_final,y_final); 
    lienzo.stroke();
    lienzo.closePath();
}



function dibujarTeclado(evento){
    //if(evento.keyCode== teclas.UP){
    //    console.log("Vamos pa Arriba");
    //}
    var colour="brown";
    var movimiento= 1;
    switch(evento.keyCode){//sirve para unir varios if
        case teclas.DOWN:
            dibujarlinea(colour,x,y,x,y+movimiento,papel);
            y=y+movimiento;      
        break;
        case teclas.UP:
            dibujarlinea(colour,x,y,x,y-movimiento,papel);
            y=y-movimiento;
        break;
        case teclas.RIGHT:
            dibujarlinea(colour,x,y,x+movimiento,y,papel);
            x=x+movimiento;
        break;
        case teclas.LEFT:
            dibujarlinea(colour,x,y,x-movimiento,y,papel);
            x=x-movimiento;
        break
    }
}