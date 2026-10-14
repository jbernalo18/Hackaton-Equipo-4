//JESICA RECUPERAR EL CARRITO
//AGREGAR EL CONTADOR DE CARRITO  , (GUARDAR CON EL EVENTO CLIC EN EL LOCAL STORAGE)

const CLAVE = "productos-carrito";

export const obtenerProductosDelCarrito = () => {
  return JSON.parse(localStorage.getItem(CLAVE)) || [];
};

export const guardarProducto = (producto) => {
  const productos = obtenerProductosDelCarrito();
  const existeElProducto = productos.some((p) => p.id === producto.id);
  if (existeElProducto) return false;

  productos.push(producto);
  localStorage.setItem(CLAVE, JSON.stringify(productos));
  return true;
};

const limpiarPrecio = (texto) => {
  return Number(texto.replace(/[^\d]/g, ""));
};

const botones = document.querySelectorAll(".tienda-btn-agregar");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.closest(".tienda-tarjeta-producto");
    const nombre = tarjeta.querySelector("h3").textContent.trim();
    const imagen = tarjeta.querySelector("img").getAttribute("src");
    const precio = limpiarPrecio(
      tarjeta.querySelector(".precio-producto").textContent,
    );
    const descripcion = tarjeta
      .querySelector(".descripcion-producto")
      .textContent.trim();
    const cantidad = 1;

    const nuevoProducto = {
      id: tarjeta.id,
      nombre,
      imagen,
      precio,
      descripcion,
      cantidad,
    };

    guardarProducto(nuevoProducto);
  });
});
