class Pakiman{
    constructor(n,v,a,t){
        this.imagen=new Image();
        this.vida=v;
        this.ataque=a;
        this.nombre=n;
        this.tipo=t; //this. la instancia de la clase, le da un tipo a lo nuevo q entra

        this.imagen.src = imagenes[this.nombre];
    }
    hablar(){
        alert(this.nombre);
    }
    mostrar(){
        
        document.write("<p>");
        document.write("<font size=7><strong>"+ this.nombre + "</strong></font><br />");
        document.body.appendChild(this.imagen);
        document.write("</p>");
        
        document.write("<p>");
        document.write("Vida = "+ this.vida + "<br />");
        document.write("Ataque = "+ this.ataque + "<br />");
        document.write("Tipo = "+ this.tipo + "<br />");
        document.write("</p>");
    }
}