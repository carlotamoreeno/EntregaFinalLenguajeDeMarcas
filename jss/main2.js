/**Función de arriba carrusel para los personajes */
var inicio = 0;
carrusel();

function carrusel(){
    var i;
    var x = document.getElementsByClassName("carru");
    for (i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    inicio++;

    if(inicio >x.length){
        inicio = 1;
    }
    x[inicio-1].style.display= "block";
    setTimeout(carrusel, 2000);
}
/*En las imagenes cuando pases el raton por encima te pregunta una pregunta*/
function mouse(){/*Comprueba la opcion del usuario*/
    var respuesta= prompt('¿Quiere usteded saber más acerca de lospersonajes?');
    if (respuesta  == 'si') {
     window.location="https://disney.fandom.com/";
    }
 }
