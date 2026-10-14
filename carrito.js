import { obtenerProductosDelCarrito } from "./script.js";

/*vamos a consultar los datos del local storage, a ver si hay algo guardado en 
el carro*/
const productosGuardados = obtenerProductosDelCarrito();
const productos = productosGuardados ? JSON.parse(productosGuardados):[] /*aqui validamos si 
productos guardados tiene algo entonces los convierte a objetos, si no usa la lista vacia.*/

/*vamos a hacer que el caculo del carrito funcione*/
let total_prod =0
for (let i=0;i<productos.length;i++){
    const producto = productos [i];
    const subtotal= producto.precio*producto.cantidad;
    total_prod=total_prod+subtotal;
}

/*usamos DOM, para buscar la etiqueta del index donde se va a representar el total carrtito*/
const totalCarrito = document.getElementById("total-carrito")

/*propiedad del DOM textcontent para modificar el texto del html*/

totalCarrito.textContent= total_prod;

/*confirmar el nombre de id, con el html llamamos la lista visible del carrito*/
const listaProductosCarrito = document.getElementById("lista-carrito")
const btnLimpiarCarrito= document.getElementById("vaciar-carrito");


/*Vamos a traer el boton limpiar*/
btnLimpiarCarrito.addEventListener("click",function(){
/*voy a indicarle que haga algo con un addevenlistener*/
/*usaremos el metodo de local storage remove item con la clave del localst*/
localStorage.removeItem("productos-carrito")
total_prod=0
totalCarrito.textContent=total_prod;
/*usaremos propiedad inner para dejar vacio el contenedor*/
listaProductosCarrito.innerHTML = "";

document.getElementById("carrito-vacio").classList.remove("d-none")
});


/*Vamos a mostrar los productos en la tabla del carrito*/
function mostrarCarrito() {

    /*Primero dejamos vacia la lista para evitar duplicar productos*/
    listaProductosCarrito.innerHTML = "";

    /*Consultamos los productos guardados*/
    const productos = obtenerProductosDelCarrito();

    /*Inicializamos el total*/
    let total_prod = 0;

    /*Validamos si el carrito tiene productos*/
    if (productos.length === 0) {
        document.getElementById("carrito-vacio").classList.remove("d-none");
    } else {
        document.getElementById("carrito-vacio").classList.add("d-none");
    }

    /*Recorremos los productos del carrito*/
    for (let i = 0; i < productos.length; i++) {

        const producto = productos[i];
        const subtotal = producto.precio * producto.cantidad;

        total_prod = total_prod + subtotal;

        /*Creamos una fila para el producto*/
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>Sin imagen</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>${subtotal}</td>
            <td>
                <button class="btn btn-danger btn-sm"
                        data-indice="${i}">
                    Eliminar
                </button>
            </td>
        `;

        /*Agregamos la fila a la tabla*/
        listaProductosCarrito.appendChild(fila);
    }

    /*Actualizamos el total de la compra*/
    totalCarrito.textContent = total_prod;
}

/*Mostramos el carrito cuando se carga la página*/
mostrarCarrito();

