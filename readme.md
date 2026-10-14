# TrendyShop — Tienda en Línea

> La vida es un 10% lo que te pasa y un 90% cómo respondes a ello.  
> **Charles R. Swindoll**

## 1. Descripción del proyecto

TrendyShop era una tienda de ropa y accesorios muy popular entre los jóvenes de Colombia. Fundada en 2018, llegó a tener cinco tiendas físicas en Bogotá y Medellín, además de un sitio web que prometía envíos en 48 horas. Sin embargo, en 2025 la empresa entró en crisis.

### ¿Qué le pasó a TrendyShop?

**Error 1. Competencia de gigantes**

TrendyShop no pudo competir con plataformas como Mercado Libre y Falabella, ni con la llegada de marcas asiáticas como Shein y Temu, que ofrecían precios mucho más bajos.

**Error 2. Mala experiencia de usuario**

La tienda acumuló quejas por pedidos que tardaban semanas en llegar, productos que no coincidían con lo ofrecido y un servicio al cliente que no respondía.

**Error 3. Desconfianza en el canal digital**

La marca no invirtió suficientemente en seguridad, diseño ni en una experiencia de compra fluida. Los clientes desconfiaban de la tienda en línea por sus políticas de devolución confusas y la falta de información de contacto confiable.

## 2. El desafío de la Hackathon

TrendyShop está en quiebra, pero tiene una última oportunidad: lanzar su comercio electrónico en siete horas.

El equipo debe construir una tienda en línea moderna que permita:

- **Recuperar la confianza:** mostrar información clara y transparente.
- **Ofrecer una buena experiencia de compra:** disponer de un catálogo atractivo y un carrito funcional y persistente.
- **Competir con grandes plataformas:** ofrecer una experiencia rápida, responsiva y fácil de usar.
- **Facilitar la comunicación:** disponer de un formulario de contacto funcional y ofrecer retroalimentación inmediata.

## 3. Objetivos del proyecto

- Aplicar los conceptos de desarrollo frontend vistos durante la formación.
- Construir una interfaz funcional y responsiva.
- Implementar un carrito de compras completo.
- Persistir los datos del carrito entre sesiones del navegador.
- Organizar el código para facilitar su mantenimiento y evolución.

## 4. Tecnologías

### Tecnologías obligatorias

- HTML5.
- CSS3.
- JavaScript ES6+.

### Tecnologías opcionales

- Bootstrap para agilizar el desarrollo de estilos.
- Consumo de API para obtener productos, por ejemplo, Fake Store API o DummyJSON.

## 5. Requisitos funcionales

### 5.1. Páginas y secciones

La tienda debe permitir navegar entre las siguientes páginas mediante una barra de navegación:

- **Inicio:** presentación de la tienda.
- **Catálogo:** listado de productos.
- **Quiénes Somos:** información sobre la tienda.
- **Contáctanos:** formulario con campos de nombre, correo electrónico y mensaje.
- **Carrito:** consulta y gestión de los productos seleccionados.

### 5.2. Catálogo de productos

Los productos deben mostrarse mediante tarjetas (*cards*).

Cada tarjeta debe incluir:

- Imagen del producto.
- Nombre.
- Precio.
- Botón para agregar el producto al carrito.

Al pulsar el botón, el producto debe incorporarse al carrito.

### 5.3. Carrito de compras

El carrito debe cumplir los siguientes requisitos:

- Mostrar un icono o enlace en la navegación con la cantidad de productos.
- Permitir consultar los productos agregados mediante una página o un desplegable.
- Mostrar nombre, cantidad, precio unitario y subtotal de cada producto.
- Permitir eliminar productos.
- Calcular y mostrar el total de la compra.
- Conservar los datos al recargar la página mediante `localStorage`.

### 5.4. Formulario de contacto

El formulario debe:

- Incluir los campos de nombre, correo electrónico y mensaje.
- Validar que los campos no estén vacíos.
- Mostrar un mensaje de confirmación cuando se envíe correctamente.

## 6. Requisitos técnicos

### 6.1. Responsividad

El sitio debe visualizarse correctamente en dispositivos móviles, tabletas y computadores de escritorio.

Para conseguirlo, se pueden utilizar:

- Flexbox.
- CSS Grid.
- El sistema de cuadrícula de Bootstrap, si se decide utilizarlo.

### 6.2. Modularidad

El código debe organizarse en módulos y separar la lógica de negocio de la lógica de presentación.

También se deben utilizar funciones reutilizables para facilitar el mantenimiento del proyecto.

### 6.3. Persistencia

Se debe utilizar `localStorage` para almacenar el carrito de compras.

El sistema debe:

1. Recuperar el carrito cuando se inicia la página.
2. Actualizar el almacenamiento cada vez que se modifica el carrito.
3. Mantener los productos almacenados después de recargar la página.

## 7. Estructura del proyecto

El proyecto utilizará la **opción 2** de organización de archivos propuesta en el documento de Generation.

```text
tienda/
│
├── index.html
│
├── catalogo/
│   └── index.html
│
├── quienes-somos/
│   └── index.html
│
├── contactanos/
│   └── index.html
│
├── carrito/
│   └── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── carrito.js
│   ├── ui.js
│   └── productos.js
│
├── services/
│   ├── apiService.js
│   ├── productService.js
│   └── cartService.js
│
├── assets/
│   └── images/
│       ├── logo.png
│       ├── favicon.ico
│       └── productos/
│           ├── producto1.jpg
│           ├── producto2.jpg
│           └── producto3.jpg
│
└── README.md
```

### 7.1. Responsabilidades de los archivos

| Archivo | Responsabilidad |
|---|---|
| `index.html` | Página de inicio. |
| `catalogo/index.html` | Página del catálogo de productos. |
| `quienes-somos/index.html` | Información sobre la tienda. |
| `contactanos/index.html` | Formulario de contacto. |
| `carrito/index.html` | Página del carrito de compras. |
| `css/style.css` | Estilos globales y diseño responsivo. |
| `js/app.js` | Controlador principal y coordinación de eventos. |
| `js/carrito.js` | Lógica y operaciones del carrito. |
| `js/ui.js` | Funciones de presentación y renderizado. |
| `js/productos.js` | Datos y funciones relacionadas con los productos. |
| `services/apiService.js` | Cliente para la comunicación con APIs. |
| `services/productService.js` | Servicio para obtener y gestionar los productos. |
| `services/cartService.js` | Servicio para las operaciones de persistencia del carrito. |
| `assets/images/` | Imágenes del sitio, logotipo, favicon e imágenes de productos. |
| `README.md` | Documentación del proyecto e instrucciones de uso. |

### 7.2. Arquitectura por capas

| Capa | Archivos | Responsabilidad |
|---|---|---|
| Vista | Archivos HTML, `style.css`, `ui.js` | Estructura y presentación de la interfaz. |
| Modelo | `productos.js`, `carrito.js` | Datos y lógica de negocio. |
| Controlador | `app.js` | Coordinación de eventos y componentes. |
| Servicios | `services/*.js` | Comunicación con APIs y operaciones de persistencia. |

## 8. Buenas prácticas de desarrollo

### 8.1. Código limpio

- Utilizar nombres descriptivos para variables y funciones.
- Mantener las funciones cortas y con una sola responsabilidad.
- Agregar comentarios cuando sean necesarios para explicar una lógica compleja.

### 8.2. Organización del código

- Modularizar el código siguiendo la estructura del proyecto.
- Evitar concentrar toda la lógica en un solo archivo.
- Separar los datos, la lógica de negocio y la presentación.

### 8.3. Manejo de errores

- Validar las entradas del usuario.
- Utilizar `try/catch` para gestionar errores al consumir APIs cuando corresponda.
- Mostrar mensajes claros cuando ocurra un error.

### 8.4. Experiencia de usuario

- Proporcionar retroalimentación visual al agregar productos al carrito.
- Mostrar mensajes de carga mientras se obtienen datos de una API.
- Mantener una navegación intuitiva.

### 8.5. Mantenibilidad

- Evitar código duplicado.
- Utilizar funciones y variables reutilizables.
- Documentar las funciones principales mediante comentarios cuando sea útil.

## 9. Criterios de evaluación

El proyecto será evaluado de acuerdo con los siguientes porcentajes definidos en el documento de la Hackathon.

| Criterio | Porcentaje |
|---|---:|
| Cumplimiento de requisitos funcionales | 30 % |
| Responsividad y diseño | 15 % |
| Uso correcto de `localStorage` | 15 % |
| Modularidad y organización del código | 15 % |
| Calidad del código, limpieza y buenas prácticas | 15 % |
| Funcionalidad del carrito de compras | 10 % |
| **Total** | **100 %** |

## 10. Entregables

Los entregables definidos para el proyecto son:

- **Repositorio de GitHub:** debe contener el código completo.
- **Archivo `README.md`:** debe incluir instrucciones de instalación y uso.
- **URL del proyecto desplegado:** entrega opcional mediante plataformas como GitHub Pages, Cloudflare o Netlify.

## 11. Organización del trabajo con Scrum

El equipo utilizará un tablero Scrum para organizar las tareas, controlar el progreso y revisar las entregas.

| Columna | Descripción |
|---|---|
| Backlog | Tareas planificadas, pero no iniciadas. |
| To Do (Sprint Backlog) | Tareas seleccionadas para el Sprint actual. |
| In Progress | Tareas en desarrollo. |
| Code Review | Tareas en revisión por otro integrante. |
| Done | Tareas completadas y verificadas. |

Cada tarea debe tener un responsable, un resultado esperado y criterios de aceptación. Antes de pasar a `Done`, se debe comprobar que la funcionalidad funciona correctamente.

## 12. Recomendaciones para el desarrollo

- Priorizar la funcionalidad sobre los detalles visuales.
- Completar las secciones principales antes de añadir funcionalidades adicionales.
- Realizar pruebas durante todo el desarrollo.
- Solicitar retroalimentación a los compañeros.
- Integrar el trabajo progresivamente para reducir conflictos.
- Verificar los requisitos obligatorios antes de entregar.

---

**Proyecto:** TrendyShop — Tienda en Línea  
**Programa:** Generation — Java Full Stack Junior  
**Tecnologías principales:** HTML5, CSS3 y JavaScript ES6+  
**Control de versiones:** Git y GitHub
