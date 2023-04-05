function moveroverlay() {
    var direita = document.getElementById("overlay-right")
    var esquerda = document.getElementById("overlay-left")

    direita.classList.add('animation2');
    esquerda.classList.remove('animation');
}

function moveroverlay2() {
    var esquerda = document.getElementById("overlay-left")
    var direita = document.getElementById("overlay-right")

    esquerda.classList.add('animation');
    direita.classList.remove('animation2');
}