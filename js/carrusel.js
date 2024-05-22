const imagenes = ["images/foto.jpg","images/foto1.jpg","images/foto2.jpg","images/foto3.jpg"];
let i=0;
const anterior = document.getElementById("ant");
const siguiente = document.getElementById("sig");
const imagenMostrada = document.getElementById("uno");

function mostrar() {
    imagenMostrada.src = imagenes[i];
}

function sigImagen() {
    i = (i + 1) % imagenes.length;
    mostrar();
}

function antImagen() {
    i = (i - 1 + imagenes.length) % imagenes.length;
    mostrar();
}

siguiente.addEventListener("click", sigImagen);
anterior.addEventListener("click", antImagen);
mostrar();