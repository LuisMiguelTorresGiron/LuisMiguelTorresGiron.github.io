var listaProductos = [];

function crearProducto(nombre, precio, stock){
    var obj = {};
    obj.Nombre = nombre;
    obj.precio = precio;
    obj.stock = stock;
    return obj;
}

function cargarProductos(){
    let listaProductos = [  crearProducto('TV', 1500, 10),
                            crearProducto('Lavadora', 1000, 1),
                            crearProducto('Licuadora', 350, 2),
                            crearProducto('Radio', 50, 10) ];
    return listaProductos;
}

//Cargar las tablas de los Productos
function cargarListaProductos(){   
    //Posicionarlos debajo de la cabecera.
    var tabla = document.getElementById('tbl_listaProductos');    
    var contador = 0;
    listaProductos = cargarProductos(); //Cargo y capturo el array    
    listaProductos.forEach(producto => {
        contador++; 
        if (producto.stock != 0){
            var fila = tabla.insertRow(-1); //Creo la fila
            var celda0 = fila.insertCell(0); //Inserto la celda 0
            celda0.innerHTML = producto.Nombre; // cargo el dato en la celda
            var celda1 = fila.insertCell(1); 
            celda1.innerHTML = producto.precio;
            var celda2 = fila.insertCell(2);
            celda2.innerHTML = '<input type="text" id="' + contador + '" disabled/>';
            var celda3 = fila.insertCell(3);
            celda3.innerHTML = '<input tag="' + contador + '" type="checkbox" id = chk_' + contador + ' onclick="javascript:habilitaTexto(this)"/>';
        }
    })    
    return;
}

function habilitaTexto(objeto){
    var tag = objeto.getAttribute('tag');
    var texto = document.getElementById(tag);
    texto.disabled = !(texto.disabled); //operador monario = NIEGA 
    //Borrar el texto una vez que se vuelve a deshabilitar
}

function calcularTotal(){
    var tabla = document.getElementById("tbl_listaProductos");
    var total = 0;

    for(var i=1, fila; fila = tabla.rows[i]; i++) {        
        if( document.getElementById("chk_" + i).checked ){            
            document.getElementById("pago").innerHTML += "<br>" +
                    fila.cells[0].innerHTML
                    + " con precio => " + fila.cells[1].innerHTML 
                    + ", cantidad => "+ document.getElementById(i).value
                    + " <h3>SUB-TOTAL = " +
                    (fila.cells[1].innerHTML * document.getElementById(i).value) +
                    "</h3>";
            total += (fila.cells[1].innerHTML * document.getElementById(i).value);
            }
        if(document.getElementById(i).value>) +
                fila.cells[0].innerHTML
                + " stock =>" + document.getElementById(i).value;
                else 

    }
        }
}




function metodo(){
    var x = "1"
    var y = 1

    if(x===y){

    }
}



