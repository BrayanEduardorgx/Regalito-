// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I'm packin' my bags that I didn't unpack the last time", time: 4 },
  { text: "I'm sayin', \"See you again,\" so many times, it's becoming my tagline", time: 10 },
  { text: "But you know the truth, I'd rather hold you", time: 16 },
  { text: "Than try to catch this flight", time: 19 },
  { text: "So many things I'd rather say", time: 21 },
  { text: "But for now, it's goodbye", time: 23 },
  { text: "You say I'm always leavin'", time: 28 },
  { text: "You, when you're sleepin' alone", time: 35 },
  { text: "But the, the car's outside", time: 42 },
  { text: "But I don't wanna go tonight", time: 44 },
  { text: "I'm not gettin' in the Addison Lee", time: 48 },
  { text: "Unless you pack your bags", time: 53 },
  { text: "You're comin' with me", time: 58 },
  { text: "I'm tired of lovin' from afar", time: 62 },
  { text: "And never being where you are", time: 63 },
  { text: "Close the windows, lock the doors", time: 67 },
  { text: "Don't wanna leave you anymore", time: 70 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 73 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 74 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 75 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 76 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 77 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 78 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 79 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 80 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 81 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 82 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 83 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 84 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 85 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 86 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 87 },
  { text: "TE AMO MI PRINCESA JULIII ESTA CANCION ES PARA TI 💗", time: 88 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 333000);