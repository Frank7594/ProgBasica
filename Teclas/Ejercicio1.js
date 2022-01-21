document.addEventListener("mousedown", clickOn);
document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("mouseup", clickOut);
var c=document.getElementById("area_de_dibujo");
var colors=document.getElementById("color_ciclo");
var tamaño=document.getElementById("texto_tamaño");
var borrar=document.getElementById("boton");
var papel = c.getContext("2d");
var click= false;

dibujarLinea("blue",0,0,700,0,papel);
dibujarLinea("blue",0,0,0,700,papel);
dibujarLinea("blue",700,0,700,700,papel);
dibujarLinea("blue",700,700,0,700,papel)

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo){
    lienzo.beginPath(); 
    lienzo.strokeStyle = color;  
    lienzo.lineWidth= tamaño.value;
    lienzo.moveTo(x_inicial,y_inicial); 
    lienzo.lineTo(x_final,y_final); 
    lienzo.stroke();
    lienzo.closePath();
}

function clickOn(evento_click){
    click=true;
    var x = evento_click.layerX;
    var y = evento_click.layerY;
}

function dibujarMouse(evento){
    if(evento.isTrusted && click == true){
        var x=evento.layerX;
        var y=evento.layerY;
                
        dibujarLinea(colors.value,x-2,y-1,x,y,papel);
        dibujarLinea(colors.value,x,y,x+1,y+2,papel);
        dibujarLinea(colors.value,x-2,y+1,x,y,papel);
        dibujarLinea(colors.value,x,y,x+1,y-2,papel);
        
    } 
}

function clickOut(){
    click=false;
}

borrar.addEventListener("click", borrarDibujo);

function borrarDibujo(){
    p.clearRect(0, 0, c.width, c.height);
    dibujarLinea(colors,1,1,299,1,p);
    dibujarLinea(colors,1,299,299,299,p);
    dibujarLinea(colors,299,299,299,1,p);
    dibujarLinea(colors,299,1,1,1,p);
  }
