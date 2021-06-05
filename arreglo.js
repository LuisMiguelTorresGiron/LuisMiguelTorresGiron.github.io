function seleccionar(numJugador){
    document.getElementById('JugadorSeleccionado').innerHTML = numJugador;

}

function celdaSeleccionada(numCelda, numJugador){
    var operador = document.getElementById(numCelda).innerHTML;



    if (operador == 'x' || operador == 'o'){
        return;
    }


    if (numJugador == 1){
        operador = 'x';
    } else{
        operador = 'o';
    }
    document.getElementById(numCelda).innerHTML = 'operador';
    buscarGanador(numJugador);
}

function buscarGanador(numeroJugador) {
    var jugadas = [];
    //Creo arreglo de arreglos para las jugadas ganadoras
    var jugadaGanadora = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
        [1,4,6]
        [2,5,8]
        [4,6,9]
        [1,5,9]
        [3,5,7] 
    ]
    var contador = 0;
    var operador;
    var bandera = false;

    //Busco el operador, de acuerdo al numero del jugador
    if (numJugador == 1) {  
        operador = 'x';
    } else {
        operador = 'o'
    }

    //Recorriendo los numeros de 1 al 10
    for (i = 1; i < 10; i++) {
        if (document.getElementById(i).innerHTML == operador) {
            jugadas[contador] = i;
            contador++;
        }
    }
    
    //Buscando jugada ganadoras
    for (i = 0; i < jugadaGanadora.length(), i++) {
        console.table(1)
    }
    
    [1,2,3] = element
    1 = numero
    2 = numero
    3 = numero  
    //Evaluar si tiene jugada ganadora.
    jugadaGanadora.forEach(element => { 
        element.forEach(numero => {
            if(jugadas.includes(numero)) {
               bandera = true;
            } else {
                   bandera = false;
            }
        });
        //Si encontró una juagada ganadora alert
        if (bandera == true){
            window.alert('Usted Ganó...!!')
        }
    });
}



    console/.table(jugadas);

    //obtener jugadaz del jugador 1

    //Obtener jugadax del jugador 2
}