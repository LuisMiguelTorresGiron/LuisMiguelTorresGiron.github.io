var Auto = {
    placa:'AF3456',
    color:'Azul',
    velocidadMax:150,
    HP: 600,

}

Frutas => manzana, cereza, uva, ...

function crearFruta(nombre, precio, cantidad) {
    var obj = {}; //Crea un objeto de instancia vacía
    obj.nombre = nombre; //Asigna nombre
    obj.precio = precio; //Asigna precio
    obj.cantidad = cantidad; //Asigna cantidad
    /CREA UN METODO PARA EL CÁLCULO DEL PRECIO
    obj.calcularPrecioTotal = function(){
        return obj.precio * obj.cantidad;
    };
    console.log(obj)
     return obj;
}

//Función que carga las frutas Nuevas   
function cargarFruta(nombre, precio, cantidad){
    var miFruta = crearFruta(nombre, precio, cantidad);
    var listaFrutas = document.getElementById('listaFrutas');

    listaFrutas.innerHTML = listaFrutas.innerHTML +
    'Nombre: '+ miFruta.nombre + 
    ' - precio: '+ miFruta.precio + 
    ' - cantidad: '+ miFruta.cantidad + 
    ' - Total: '+ miFruta.calcularPrecioTotal() +
    '<br>';

}