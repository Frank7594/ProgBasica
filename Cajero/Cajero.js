var imagenes=[];
imagenes["100"]="100usd.jpg";
imagenes["50"]="50usd.jpg";
imagenes["20"]="20usd.jpg";
imagenes["10"]="10usd.jpg";
imagenes["5"]="5usd.jpg";
imagenes["1"]="1usd.jpg";

class Billete{
    constructor(v,c){
        this.valor=v;
        this.cantidad=c;
        this.imagen=new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

var caja=[];
caja.push(new Billete(100,10));
caja.push(new Billete(50,10));
caja.push(new Billete(20,20));
caja.push(new Billete(10,20));
caja.push(new Billete(5,25));
caja.push(new Billete(1,25));

var entregado = [];
var dinero;
var papeles;
var div;
var r = document.getElementById("resultado");
var b= document.getElementById("boton");
var s=document.getElementById("saldo");

b.addEventListener("click", entregarDinero );
s.addEventListener("click", saldoTotal )


function entregarDinero(){
    r.innerHTML = "";
    var t = document.getElementById("dinero");
    dinero= parseInt(t.value);
    for(var bi of caja){
        if (dinero>0){
            div = Math.floor(dinero/bi.valor);
            if(div>bi.cantidad){
                papeles=bi.cantidad;
            }
            else{
                papeles = div;
            }
            entregado.push(new Billete(bi.valor,papeles));
            dinero-=(bi.valor*papeles);
            bi.cantidad -= papeles;
        }
        
    }

    if (dinero>0){
        r.innerHTML="No tengo para esa cantidad de dinero";
    }
    
    else{
        r.innerHTML += " Retiraste:" + "<br />";

        for(var e of entregado){
            if(e.cantidad>0){
                for(b2=1;b2<= e.cantidad;b2++){               
                    r.innerHTML += "<img src=" + e.imagen.src + " />" ;
                }
                r.innerHTML += "<br/>"+e.cantidad + " Billetes de " + e.valor + " Usd" + "<br/><hr />";
            } 
        }
    }
}

function saldoTotal(){
    var total=0
    for(b2 of caja){
        total+= b2.valor * b2.cantidad;
    }
    alert("La cantidad de dinero en el Cajero es de "+ total + "Usd");
}

