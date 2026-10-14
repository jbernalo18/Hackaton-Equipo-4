
import { obtenerProductosDelCarrito } from "./script.js";

/*vamos a consultar los datos del local storage, a ver si hay algo guardado en 
el carro*/
const productosGuardados = obtenerProductosDelCarrito();
const productos = productosGuardados || [];

/*vamos a hacer que el caculo del carrito funcione*/
let total_prod = 0;
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    const subtotal = producto.precio * producto.cantidad;
    total_prod = total_prod + subtotal;
}

/*usamos DOM, para buscar la etiqueta del index donde se va a representar el total carrtito*/
const totalCarrito = document.getElementById("total-carrito");

/*propiedad del DOM textcontent para modificar el texto del html*/
totalCarrito.textContent = total_prod;

/*confirmar el nombre de id, con el html llamamos la lista visible del carrito*/
const listaProductosCarrito = document.getElementById("lista-carrito");
const btnLimpiarCarrito = document.getElementById("vaciar-carrito");

/*Vamos a mostrar los productos en la tabla del carrito*/
function mostrarCarrito() {

    /*vamos a consultar los productos guardados*/
    const productos = obtenerProductosDelCarrito();

    /*usaremos propiedad innerHTML para dejar vacio el contenedor*/
    listaProductosCarrito.innerHTML = "";

    /*vamos a hacer que el caculo del carrito funcione*/
    let total_prod = 0;

    /*validamos si hay productos guardados*/
    if (productos.length === 0) {
        document.getElementById("carrito-vacio").classList.remove("d-none");
    } else {
        document.getElementById("carrito-vacio").classList.add("d-none");
    }

    /*recorremos los productos del carrito*/
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const subtotal = producto.precio * producto.cantidad;
        total_prod = total_prod + subtotal;

        /*creamos una fila para cada producto*/
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>
                <img src="${producto.imagen}" alt="${producto.nombre}" width="60">
            </td>
            <td>${producto.nombre}</td>
            <td>$${Number(producto.precio).toLocaleString("es-CO")}</td>
            <td>${producto.cantidad}</td>
            <td>$${subtotal.toLocaleString("es-CO")}</td>
            <td>
                <button class="btn btn-danger btn-sm" data-indice="${i}">
                    Eliminar
                </button>
            </td>
        `;

        /*agregamos la fila a la tabla*/
        listaProductosCarrito.appendChild(fila);
    }

    /*actualizamos el total de la compra*/
    totalCarrito.textContent = `$${total_prod.toLocaleString("es-CO")}`;
}

/*mostramos el carrito cuando se carga la pagina*/
mostrarCarrito();

/*vamos a permitir eliminar un producto de la lista*/
listaProductosCarrito.addEventListener("click", function(evento) {

    /*verificamos si se hizo clic en el boton eliminar*/
    if (evento.target.tagName === "BUTTON") {

        const indice = Number(evento.target.dataset.indice);

        /*consultamos los productos guardados*/
        const productos = obtenerProductosDelCarrito();

        /*eliminamos el producto seleccionado*/
        productos.splice(indice, 1);

        /*guardamos la lista actualizada en local storage*/
        localStorage.setItem("productos-carrito", JSON.stringify(productos));

        /*actualizamos la tabla y el total*/
        mostrarCarrito();
    }
});

/*Vamos a traer el boton limpiar*/
btnLimpiarCarrito.addEventListener("click", function() {

    /*usaremos el metodo de local storage removeItem con la clave del localst*/
    localStorage.removeItem("productos-carrito");

    /*actualizamos la tabla, el total y el mensaje de carrito vacio*/
    mostrarCarrito();
});
