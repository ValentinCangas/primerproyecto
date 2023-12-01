let imagen = document.querySelector(".cambiarImagen")
let boton = document.querySelector("button")

let imagenCambiada = false;

boton.onclick = function () {
    if (imagenCambiada == false) {
        imagen.src = "rodrigo-rojas-karate-odesur-asuncion-2022.webp"
        imagenCambiada = true
    }else{
        imagen.src = "FxEZ_LNXwA40eNk.jpg"
        imagenCambiada = false
    }
}

let imagenn = document.querySelector(".kurihara")
let botonn = document.querySelector(".boton")

let imagenCambia = false;

botonn.onclick = function () {
    if (imagenCambia == false){
        imagenn.src = "kurihara.jpeg"
        imagenCambia = true
}else{
    imagenn.src = "images.jpg"
    imagenCambia = false
}
}
