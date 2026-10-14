/* ==========================================================
   carrito.js
   Contador del carrito: suma 1 cada vez que se pulsa
   "Añadir a la cesta" y muestra un mensaje corto en el botón.
   ========================================================== */

// ----- Constantes -----
const TEXTO_BOTON = 'Añadir a la cesta';
const TEXTO_CONFIRMACION = '¡Añadido!';
const DURACION_MENSAJE_MS = 1000;

// ----- Elementos y estado -----
const botonesAgregar = document.querySelectorAll('.btn-agregar');
const contadorCarrito = document.querySelector('.header__cart-count');

let cantidadProductos = 0;

/** Escribe la cantidad actual en el numerito del header. */
function mostrarCantidad() {
  contadorCarrito.textContent = cantidadProductos;
}

/** Cambia el texto del botón un momento y luego lo restaura. */
function mostrarConfirmacion(boton) {
  boton.textContent = TEXTO_CONFIRMACION;
  setTimeout(() => {
    boton.textContent = TEXTO_BOTON;
  }, DURACION_MENSAJE_MS);
}

/** Se ejecuta al hacer clic en un botón de agregar. */
function agregarAlCarrito(boton) {
  cantidadProductos++;
  mostrarCantidad();
  mostrarConfirmacion(boton);
}

// ----- Inicio: conecta cada botón con la acción -----
botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', () => agregarAlCarrito(boton));
});
