var imagenes=[];
imagenes["Cauchin"]="vaca.png";
imagenes["Pokacho"]="pollo.png";
imagenes["Tocinauro"]="cerdo.png";

//var imagen={
//    Cauchin: "vaca.png",
//    Pokacho: "pollo.png",
//    Tocinauro: "cerdo.png",
//}

var coleccion = [];
coleccion.push(new Pakiman("Cauchin","100","30", "Tierra"));
coleccion.push(new Pakiman("Pokacho", "80", "50","Volador"));
coleccion.push(new Pakiman("Tocinauro","120", "40","Tierra/Dragon"));

for(var p of coleccion){ //in sirve para indice "of" para el objeto
    p.mostrar();
}


