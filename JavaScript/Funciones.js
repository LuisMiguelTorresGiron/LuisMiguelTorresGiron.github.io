// Mensaje de Bienv

function Mostrar() {
    var miDiv = document.getElementById('bienvenido');
    if (miDiv.style.borderColor == 'red') {
        // Muestro la etiqueta div
        miDiv.style.borderColor = 'blue';
    }else{
        //Oculto la etiqueta div
        miDiv.style.borderColor = 'red';
    }
}

