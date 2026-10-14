/* ==========================================================
   cursor.js
   El video avanza o retrocede según la posición horizontal
   del mouse (izquierda = inicio, derecha = final).
   En pantallas táctiles (celular/tablet) no hay mouse, así
   que el video se reproduce solo en bucle.
   ========================================================== */

// ----- Constantes (valores que se pueden ajustar en un solo lugar) -----
const SUAVIDAD = 0.25;          // 0 a 1: qué tan rápido el video alcanza al mouse
const UMBRAL_PARO = 0.001;      // diferencia mínima para decir "ya llegó"
const MARGEN_FINAL_SEG = 0.05;  // evita saltar al último fotograma exacto
const CAMBIO_MINIMO_SEG = 0.01; // no mover el video por cambios diminutos

// ----- Elementos y estado -----
const video = document.getElementById('chicaVideo');
const esPantallaTactil = window.matchMedia('(pointer: coarse)').matches;

let objetivo = 0.5;    // dónde está el mouse (0 = izquierda, 1 = derecha)
let actual = 0.5;      // dónde está el video (también de 0 a 1)
let animando = false;  // ¿hay un ciclo de animación corriendo ahora mismo?

/** Guarda la posición del mouse y arranca la animación si estaba parada. */
function actualizarObjetivo(evento) {
  objetivo = evento.clientX / window.innerWidth;
  iniciarAnimacion();
}

/** Mueve el video un paso hacia el objetivo y decide si hay que seguir. */
function moverVideo() {
  actual += (objetivo - actual) * SUAVIDAD;

  if (video.duration) {
    const tiempo = Math.min(actual * video.duration, video.duration - MARGEN_FINAL_SEG);
    if (Math.abs(video.currentTime - tiempo) > CAMBIO_MINIMO_SEG) {
      video.currentTime = tiempo;
    }
  }

  // Si todavía falta camino, pedimos otro cuadro; si no, paramos el ciclo.
  if (Math.abs(objetivo - actual) > UMBRAL_PARO) {
    requestAnimationFrame(moverVideo);
  } else {
    animando = false;
  }
}

/** Arranca el ciclo solo si no está corriendo (evita ciclos duplicados). */
function iniciarAnimacion() {
  if (animando) return;
  animando = true;
  requestAnimationFrame(moverVideo);
}

/** Reproduce el video solo y en bucle (para celulares y tablets). */
function reproducirEnBucle() {
  video.loop = true;
  // play() devuelve una promesa; si el navegador lo bloquea, no mostramos error.
  video.play().catch(() => {});
}

// ----- Inicio -----
if (esPantallaTactil) {
  reproducirEnBucle();
} else {
  window.addEventListener('pointermove', actualizarObjetivo);
}
