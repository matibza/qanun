var contador = 0;


function banana() {
    contador++
var audio = document.getElementById("audio");
var gg = document.getElementById("pl");
    if (contador == 1) {
      audio.play();
      gg.innerHTML = "▉";
    }
    if (contador == 2) {
      audio.pause();
      contador = 0;
      gg.innerHTML = "▶";
    }
}
