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

// TOMAR LOS ELEMENTOS HACER LOS CALCULOS DE RESUMEN DE COMPRAR  Y CON GET ELEMEN BY ID   BOTON LIMPIAR//
//EJEM PERSISTAN LOS DATOS DE GUARDADOS EN EL CARRITO, COJA LA LISTA DE OBJETOS. 
//HEILEN PARRA 

