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

const botones = document.querySelectorAll(".tienda-btn-agregar");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = boton.closest(".tarjeta");

    const nuevoProducto = {
      id: producto.dataset.id,
      nombre: producto.dataset.nombre,
      imagen: producto.dataset.imagen,
      precio: Number(producto.dataset.precio),
      descripcion: producto.dataset.descripcion,
      cantidad: Number(producto.dataset.cantidad),
    };

    guardarProducto(nuevoProducto);
  });
});

