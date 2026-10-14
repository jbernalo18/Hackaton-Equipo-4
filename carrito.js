/*vamos a consultar los datos del local storage, a ver si hay algo guardado en 
el carro*/
const productosGuardados = localStorage.getItem("productos-carrito")
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
const listaProductosCarrito = document.getElementById("lista-productos-carrito")//cambiar


/*Vamos a traer el boton limpiar*/
const btnLimpiarCarrito= document.getElementById("btn-limpiar-carrito");
/*voy a indicarle que haga algo con un addevenlistener*/
btnLimpiarCarrito.addEventListener("click",function(){
/*usaremos el metodo de local storage remove item con la clave del localst*/
localStorage.removeItem("productos-carrito")
total_prod=0
totalCarrito.textContent=total_prod;
/*usaremos propiedad inner para dejar vacio el contenedor*/
listaProductosCarrito.innerHTML = "";
});
