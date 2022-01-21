var d = document.getElementById("dibujito"); /* metodo del documento que trae atraves del ID */
var lienzo = d.getContext("2d"); /* metodo del canvas en contexto 2d o 3d */
var lineas = 300;
var l = 0;
var yi, xf, xi, yf;
var Colors = "blue"

/*lienzo.beginPath(); /* Arrancar el dibujo */
/*lienzo.strokeStyle = "blue";  /* propiedad del objeto para definir el color del dibujo */
/*lienzo.moveTo(5,100); /* desde donde empieza el dibujo */
/*lienzo.lineTo(200,200); /* Sirve para decir que se va a trzar la linea */
/*lienzo.stroke(); /* Sirve para trazar la linea */
/*lienzo.closePath(); terminar el Dibujo */

function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final){
    lienzo.beginPath(); 
    lienzo.strokeStyle = color;  
    lienzo.moveTo(x_inicial,y_inicial); 
    lienzo.lineTo(x_final,y_final); 
    lienzo.stroke();
    lienzo.closePath();
}
for(l=0; l<lineas ;l++){
    dibujarlinea("yellow",0,0,300,yf);
    yf=l;
}
for(l=0; l<lineas ;l++){
    dibujarlinea("yellow",0,0,xf,300);
    xf=300-l;
}
for(l=0; l < lineas; l++){

    yi= l;
    xf=(l+1);
    dibujarlinea(Colors,0,yi,xf,300);
    

}
/*while(l < lineas){
    
    dibujarlinea(Colors,0,yi,xf,300);
    l++;
    yi= 10*l;
    xf=10*(l+1);

}*/



for(l=0;l < lineas; l++){
    
    dibujarlinea(Colors,300,yi,xf,0);
    yi=(l+1);
    xf=1*l;

}

for(l=0;l < lineas; l++){
    
    dibujarlinea("red",0,yi,xf,0);
    yi=300-l;
    xf=l;

}
for(l=0;l < lineas; l++){
    
    dibujarlinea("red",xi,300,300,yf);
    yf=300-l;
    xi=l;

}

