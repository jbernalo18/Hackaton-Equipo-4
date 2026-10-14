/*este archivo cuenta los clicks en "+ Agregar" y los muestra en el numerito del carrito del header*/

const CLAVE_CLICKS = "contador-clicks"; /*clave del local storage donde se guarda el numero de clicks*/

/*funcion que pone el numero de clicks en el header*/
const mostrarContador = () => {

    /*buscamos el numerito del header con DOM*/
    const contador = document.getElementById("contador-carrito");

    /*el header se carga con fetch y puede llegar tarde, si todavia no existe no hacemos nada*/
    if (!contador) return;

    /*consultamos los clicks guardados, si no hay nada usamos 0*/
    contador.textContent = Number(localStorage.getItem(CLAVE_CLICKS)) || 0;
};

/*funcion para volver el contador a 0 (se usa al vaciar el carrito)*/
export const reiniciarContador = () => {
    localStorage.removeItem(CLAVE_CLICKS);
    mostrarContador();
};

/*traemos todos los botones agregar*/
const botones = document.querySelectorAll(".tienda-btn-agregar");

/*a cada boton le agregamos el evento click*/
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {

        /*traemos los clicks que ya habia guardados*/
        let clicks = Number(localStorage.getItem(CLAVE_CLICKS)) || 0;

        /*sumamos 1 click*/
        clicks = clicks + 1;

        /*guardamos el nuevo numero en el local storage para que no se pierda al recargar*/
        localStorage.setItem(CLAVE_CLICKS, clicks);

        /*actualizamos el numerito del header*/
        mostrarContador();
    });
});

/*lo ejecutamos al cargar la pagina, por si el header ya estaba listo*/
mostrarContador();

/*componentes.js avisa con este evento cuando termina de meter el header, ahi lo volvemos a ejecutar*/
document.addEventListener("componente-cargado", mostrarContador);