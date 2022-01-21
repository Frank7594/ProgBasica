var texto= document.getElementById("texto_lineas");
var boton= document.getElementById("botoncito");
var color_ciclo= document.getElementById("color_ciclo");
var lado= document.getElementById("lado");
var tamaño= document.getElementById("t_canvas");

var canvas = document.getElementById("malla"); 
var lienzo = d.getContext("2d");
 
boton.addEventListener("click", dibujoporclick);


function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final){
    lienzo.beginPath(); 
    lienzo.strokeStyle = color;  
    lienzo.moveTo(x_inicial,y_inicial); 
    lienzo.lineTo(x_final,y_final); 
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoporclick(){
    
    var lineas = parseInt(texto.value);
    var dimen = parseInt(tamaño.value);
    canvas.width = dimen;
    canvas.height = dimen;
    var lado_real= lado.value;
    var espacio = dimen / lineas;
    var colour=color_ciclo.value;
    var l = 0;
    if(lado_real=="inf_izq"){
        for(l=0; l < lineas; l++){
            dibujarlinea(colour,1,yi,xf,dimen);
            yi= espacio*l;
            xf= espacio*(l+1);
        }
    }
    else if (lado_real=="sup_der"){
        for(l=0; l < lineas; l++){
            var yi=(1*(-espacio))+dimen;
            var xf= espacio*(l+1);
            dibujarlinea(colour,dimen,yi,xf,1);
        }
    }
    else if (lado_real=="sup_izq"){
        for(l=0; l < lineas; l++){
            dibujarlinea(colour,xi,1,1,yf);
            var xi= (1*(-espacio))+dimen;
            var yf= espacio*(l+1);
        }
    }

    else if (lado_real=="inf_der"){
        for(l=0; l < lineas; l++){
            dibujarlinea(colour,xi,dimen,dimen,yf);
            var yf= (1*(-espacio))+(dimen-10);
            var xi= espacio*l;
        }
    }
    else if (lado_real=="todo"){
        for(l=0; l < lineas; l++){
            var yi=espacio*l;
            var xf=espacio*(l+1);
            dibujarlinea(colour,1,yi,xf,dimen);
            
            var yi2=(l*(-espacio))+dimen;
            var xf2=(l*(-espacio))+(dimen+10);
            dibujarlinea(colour,dimen,yi2,xf2,1);

            var xi=(l*(-espacio))+dimen;
            var yf=espacio*(l+1);
            dibujarlinea(colour,xi,1,1,yf);

            var xi2=espacio*l;
            var yf2=(l*(-espacio))+(dimen-10);
            dibujarlinea(colour,xi2,dimen,dimen,yf2);
        }
    }
    else{
        alert("Error! Imposible Dibujar.")
    }
    dibujarlinea(colour, 1, 1, 1, dimen-1);
    dibujarlinea(colour, 1, dimen - 1, dimen-1, dimen-1)
    dibujarlinea(colour, dimen-1, 1, dimen-1, dimen-1);
    dibujarlinea(colour, 1, 1, dimen-1, 1);
}





