function Padre(){
    this.nombrePadre = null
}

function Hijo(nombre){
    this.nombreHijo = nombre;
    this.hijo = null
}

Padre.prototype.add = function(nombre){
    let nombreNuevoHijo = new Hijo(nombre)
    let nombreHeredado = this.nombrePadre
    if(nombreHeredado === null) {
        this.nombrePadre = nombreNuevoHijo
        return nombreNuevoHijo
    }

    while(nombreHeredado.hijo !== null){
        nombreHeredado = nombreHeredado.hijo
    }
     
    nombreHeredado.hijo = nombreNuevoHijo

    return nombreNuevoHijo


}
let nuevoHijo = new Padre()
console.log(nuevoHijo.add("Tito"))
console.log(nuevoHijo.add("Pancho"))
console.log(nuevoHijo)
