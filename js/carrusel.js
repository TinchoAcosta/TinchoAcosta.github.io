const imagenes = ["images/foto.jpg","images/foto1.jpg","images/foto2.jpg","images/foto3.jpg"]; //arreglo de imagenes(sus links)
let i=0; //indice iniciado
const anterior = document.getElementById("ant"); //rescato el boton "Previo"
const siguiente = document.getElementById("sig"); //rescato el boton "Siguiente"
const imagenMostrada = document.getElementById("uno"); //rescato el elemento imagen que se vera en pantalla

mostrar(); //mostramos la imagen inicial del arreglo

siguiente.addEventListener("click", sigImagen); // v
anterior.addEventListener("click", antImagen); // escuchas para click en ambos botones


function mostrar() {
    imagenMostrada.src = imagenes[i];
}

function sigImagen() {
    i = (i + 1) % imagenes.length;
    mostrar();
}
//^
// se cambia el indice cuidando que no salga del rango y muestra la nueva imagen
//v
function antImagen() {
    i = (i - 1 + imagenes.length) % imagenes.length;
    mostrar();
}