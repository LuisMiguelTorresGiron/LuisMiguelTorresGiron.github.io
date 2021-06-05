// Mensaje de Bienv

function Mostrar() {
    var miDiv = document.getElementById
}

document.getElementById('mensaje').innerHTML='mensaje'

document.write("<div style='background-color:#776199;'>Bienvenido</div>")
################################################################


function compara(numero1, numero2){
    var bandera = false;
    var numero1=document.getElementById('numero1').value;
    var numero2=document.getElementById('numero2').value;

    console.log(numero1);
    console.log(numero2);
    if (numero1>numero2){
        bandera=true;
    }

    document.getElementById('respuesta1').innerHTML=bandera;
}

function compara2(numero3, numero4){
    var bandera = false;
    var numero3=document.getElementById('numero3').value;
    var numero4=document.getElementById('numero4').value;

    console.log(numero3);
    console.log(numero4);
    if (numero3<numero4){
        bandera=true;
    }

    document.getElementById('respuesta2').innerHTML=bandera;
}