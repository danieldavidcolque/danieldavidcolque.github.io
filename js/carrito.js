//Funcion para mostrar productos carrito

function mostrarProductosCarrito(){
    const productos = cargarProductosCarrito();
    let contenido = "";
    if (productos.length == 0) {
        contenido = swal("Hola!", "Sin productos en el carrito!", "success");

    }else {
        contenido += `<table class="table">`;
        productos.forEach((producto)=> {
            contenido += `<tr>
                <td><img src="${producto.foto}" alt="${producto.nombre}" width= "56"></td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio * producto.cantidad}</td>
                <td><a href="#" class= "btn btn-secondary" onclick = "eliminarProducto(${producto.codigo});">Eliminar Producto</a></td>
                </tr>`;
        });
        
        
        contenido += `<tr>
        <td> Total $: </td>
        <td>${totalapagar()}</td>
        </tr>
        </table>`; 
      
    }        
          
    document.getElementById("productocarro").innerHTML = contenido;
    
}

mostrarProductosCarrito();
totalapagar();
