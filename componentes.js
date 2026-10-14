async function cargarComponente(id, ruta) { /**definimos los parametros que va recibir */
  const respuesta = await fetch(ruta); // pide el archivo que le pasamos en ruta
  const html = await respuesta.text(); // lo convierte en texto
  document.getElementById(id).innerHTML = html; // lo mete dentro del div
}

cargarComponente("header-trendy", "./header.html"); /*enviamos los argumentos*/
cargarComponente("footer", "./footer.html");