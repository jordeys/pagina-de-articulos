
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Silla Gamer Trust GXT 716 RIZZA RGB Black/RGB',
        precio: 369.99,
        imagen: 'https://www.tecnosmart.com.ec/wp-content/uploads/2021/11/SIL073.jpg'
     },

     {
         id: 2,
         nombre: 'Tarjeta de Video GTX 1660 Super Asus TUF Gaming 6Gb GDDR6',
         precio: 380.00,
         imagen: 'https://www.bestcell.com.ec/imgadmin/storage/imagenes_articulos/664/2687.jpg.webp',
         class: 'zoom'
     },

     {
         id: 3,
         nombre: 'PC Gamer Intel i7 11700K / RTX 3070 / 500 nvme / 16Gb / Monitor 144Hz / Hydro',
         precio: 2990.00,
         imagen: 'https://www.bestcell.com.ec/imgadmin/storage/imagenes_articulos/643/2609.jpg.webp',
     },

     {
         id: 4,
         nombre: 'Auriculares gaming',
         precio: 20,
         imagen: 'https://i.blogs.es/25be06/auricularesjugonesap/1366_2000.jpg'
     },

     {
         id: 5,
         nombre: 'Monitor AOC 24G2 – 24″',
         precio: 384.99,
         imagen: 'https://www.tecnosmart.com.ec/wp-content/uploads/2021/09/MON0326.jpg'
     },

     {
         id: 6,
         nombre: 'Mainboard Asus ROG Strix X570-I Gaming – (90MB1140-M0AAY0)',
         precio: 395.99,
         imagen: 'https://www.tecnosmart.com.ec/wp-content/uploads/2021/08/Mainboard-ASUS-ROG-STRIX-X570-I-Gaming-Ryzen-AM4-AuraSync-Mini-ITX-90MB1140-M0AAY0_Placas-madre_7066_1.jpeg'
     },

     {
         id: 7,
         nombre: 'Teclado Gamer Multimedia Iluminado – Genius Scorpion K220',
         precio: 19.00,
         imagen: 'https://tecnogame.ec/wp-content/uploads/2020/10/Teclado-Gamer-Genius-K220-3.jpg.webp'
     },

     {
         id: 8,
         nombre: 'Mouse Gamer USB Iluminado GM60 – Geek',
         precio: 9.00,
         imagen: 'https://tecnogame.ec/wp-content/uploads/2020/08/mouse-gamer-gm60-1-1.jpg.webp'
     },
                     
     {
         id: 9,
         nombre: 'MousePad Gamer Rgb XXL 30x80cm – Glowing Cool',
         precio: 9.00,
         imagen: 'https://tecnogame.ec/wp-content/uploads/2022/01/Glowing-Cool.jpg.webp'
     },

     {
         id: 10  ,
         nombre: 'KROM Gamepad KENZO -NXKROMKNZ- Gamepad alambrico e inalambrico, botones configurables, PC, SWITCH, ANDROID, IOS, PS3, PS4, Soporte Smartphone, Negro',
         precio: 28.90,
         imagen: 'https://m.media-amazon.com/images/I/51bA91H2APL._AC_SX679_.jpg'
     },
];

let carrito = [];
const divisa = "$";
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}

function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();

