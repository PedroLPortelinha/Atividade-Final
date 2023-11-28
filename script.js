const imagem = document.querySelector('#chat');
const audio = new Audio('Deus.mp3');

function mostrar() {
    var texto = document.getElementById('texto');
    var textoEscondido = document.getElementById('textoEscondido');

    texto.style.display = "none";
    textoEscondido.style.display = "block";
}

function esconder() {
    var texto = document.getElementById('texto');
    var textoEscondido = document.getElementById('textoEscondido');

    texto.style.display = "block";
    textoEscondido.style.display = "none";
}

imagem.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
});
