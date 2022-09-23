//Carrito de compras 

// Array de objetos : productos
const productos = [
    {codigo: 1, nombre:"Duraznos en mitades x 820 grs", marca: "La Colina", foto: "img/durmit.jpg", unxbulto: 12, precio: 220, stock: 1350,descripcion: "Duraznos amarillos pavías o priscos, cortados en mitades simétricas maduros, sanos, limpios y sin piel, cerrados herméticamente y sometidos a esterilización industrial."},
    {codigo: 2, nombre:"Duraznos cubeteados x 820 grs", marca: "La Colina", foto: "img/durcubo.jpg", unxbulto: 12, precio: 200, stock: 1350,descripcion:"Duraznos amarillos pavías o priscos, cortados en trozos, sanos, limpios y sin piel, cerrados herméticamente y sometidos a esterilización industrial."},
    {codigo: 3, nombre:"Tomates pelados enteros x 400 grs", marca: "La Colina", foto: "img/toment.jpg", unxbulto: 24, precio: 60, stock: 2805, descripcion: "Tomate entero pelado extra 400 gr. Obtenido a partir de tomate fresco y y envasado en lata con abre facil para un cosumo rapido y sencillo"},
    {codigo: 4, nombre:"Peras en mitades x 820 grs", marca: "La Colina", foto: "img/perasmit.jpg", unxbulto: 12, precio: 210, stock: 1000, descripcion: "Peras en conserva, en mitades de consistencia firme y sin tendencia a deshacerse, envasada con una solución de edulcorantes nutritivos, envasados herméticamente en un recipiente de hojalata y sometido a tratamiento térmico. Las frutas contenidas en un mismo envase pertenecen a la misma variedad botánica."},
    {codigo: 5, nombre:"Coctel de 4 Frutas x 820 grs", marca: "La Colina", foto: "img/coctel.jpg", unxbulto: 12, precio: 280, stock: 1350, descripcion: "Conserva elaborada con una mezcla de trozos de fruta: Duraznos, Manzana/Pera, Cereza y Ananá. Envasados en un recipiente de hojalata con una solución de edulcorantes nutritivos, cerrado herméticamente y esterilizado industrialmente."}
];


// Función para guardar los productos en localStorage
function almacenarProductos(productos){
    localStorage.setItem("productos",JSON.stringify(productos));//convierto un objeto o valor de JS a formato texto de JSON
}

// Función para cargar los productos almacenados en LocalStorage
function cargarProductos(){
    return JSON.parse(localStorage.getItem("productos")) || []; // Convierte un JSON a objeto JS
}

// Función para guardar los productos del carrito en localStorage
function almacenarProductosCarrito(productos){
    localStorage.setItem("productosCarrito",JSON.stringify(productos));//convierto un objeto o valor de JS a formato texto de JSON
}

// Función para cargar los productos del carrito en localStorage
function cargarProductosCarrito(){
    return JSON.parse(localStorage.getItem("productosCarrito")) || []; // Convierte un JSON a objeto JS
    
}

//Funcion para agregar productos al carrito con el boton
function agregarProducto(codigo){
    const productosCarrito = cargarProductosCarrito();
    let pos = productosCarrito.findIndex(item => item.codigo === codigo);
    if (pos > -1 ) {
        productosCarrito[pos].cantidad += 1;
    }else {
        const producto = buscarProducto(codigo);
        producto.cantidad = 1;
        productosCarrito.push(producto);
    }

    almacenarProductosCarrito(productosCarrito);
    //mostrarProductosCarrito();
    swal("Gracias!", "Producto agregado al carrito!", "success");
}
//Funcion para eliminar productos del carrito con el boton
function eliminarProducto(codigo){
    const productosCarrito = cargarProductosCarrito();
    let pos = productosCarrito.findIndex(item => item.codigo === codigo);
    productosCarrito[pos].cantidad -= 1;
    if (productosCarrito[pos].cantidad==0){
        productosCarrito.splice(pos,1);
    }
    almacenarProductosCarrito(productosCarrito);
    mostrarProductosCarrito();
    swal("Gracias!", "Producto eliminado del carrito!", "success");
}

//Funcion para buscar productos con el codigo (metodo find)
function buscarProducto(codigo){
    return productos.find(function (articulo) {
        return articulo.codigo == codigo;
    });//llamo al metodo find para q devuelva el valor del elemento del array a traves de una funcion anonima
};



function totalapagar(){
    const productosCarrito = cargarProductosCarrito();
    return productosCarrito.reduce((acumulado, elemento) => acumulado +(elemento.cantidad * elemento.precio),0);
}


    

almacenarProductos(productos);
totalapagar();

