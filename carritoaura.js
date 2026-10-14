const listaProductos = document.querySelectorAll(
    '#maquillaje, #cuidado-piel, #brochas'
);

let productoArray = [];

document.addEventListener('DOMContentLoaded', eventListeners);

function eventListeners() {
    listaProductos.forEach(producto => {
        producto.addEventListener('click', getDataElements);
    });
}

function getDataElements(e) {
    if (e.target.classList.contains('tienda-btn-agregar')) {
        const elementoHTML = e.target.parentElement;
        selectData(elementoHTML);
    }
}

function selectData(producto) {
    const productObj = {
        img: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio-producto').textContent.replace('$', ''),
        id: producto.id,
        quentity: 1
    };

    productoArray = [...productoArray, productObj];
    console.log(productoArray);

    productosHtlm();
}

function productosHtlm() {
    productoArray.forEach(producto => {
        const { img, titulo, precio, quentity, id } = producto;

        const tr = document.createElement('tr');

        const tdImg = document.createElement('td');
        const prodImg = document.createElement('img');

        prodImg.src = img;
        prodImg.alt = titulo;
        prodImg.style.width = '60px';

        tdImg.appendChild(prodImg);
        tr.appendChild(tdImg);

        console.log(tr);
    });
}
