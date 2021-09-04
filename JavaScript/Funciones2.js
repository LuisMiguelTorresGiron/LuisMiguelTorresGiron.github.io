function compara(numero1, numero2) {
    var bandera = false;

    console.log(numero1)
    console.log(numero2)

    if (numero1 > numero2) {
    bandera = true;
    }

    document.getElementById('respuesta1').innerHTML = bandera;
}


function compara2(numero3, numero4) {
    var bandera = false;
 
    console.log(numero3)
    console.log(numero4)

    if (numero3 < numero4) {
    bandera = true;
    }

    document.getElementById('respuesta2').innerHTML = bandera;
}