function cambiarTexto() {
    var boton = document.getElementById("miBoton");
    if (boton.innerHTML === "Haz clic aquí") {
        boton.innerHTML = "¡Gracias por hacer clic!";
    } else {
        boton.innerHTML = "Haz clic aqui";
    }
}