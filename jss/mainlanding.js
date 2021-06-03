let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function(e) {
    e.preventDefault();
    if (contador == 0) {
        enlaces.className = ("enlaces dos")
        contador = 1;
    } else {
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        contador = 0;
    }
})

/*******************************************PRODUCTOS***********************************************/
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
    setTimeout(carrusel, 5000);
}
/*******************************************PRODUCTOS***********************************************/