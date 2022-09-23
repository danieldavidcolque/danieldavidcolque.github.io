// FETCH EN EL PROYECTO USANDO EL ARCHIVO DE LOS PRODUCTOS TRANSFORMADOS A FORMATO JSON
fetch('js/productos.json')
.then((response)=> response.json())
.then((data) => {
    console.log(data);
    const resultado = document.getElementById("resultado");
    data.forEach(valor => {
        let columna = document.createElement("div");
        columna.className = "col-md-4";
        let div_padre = document.createElement("div");
        div_padre.className = "card m-2";
        let div_hijo1 = document.createElement("div");
        div_hijo1.className = "card header text-center";
        let div_hijo2 = document.createElement("div");
        div_hijo2.className = "card body text-center";
        let parrafo = document.createElement("p");
        div_hijo1.innerHTML = `${valor.nombre} <b>$ ${valor.precio}</b> <a href="#" class="btn btn-primary" onclick = agregarProducto(${valor.codigo}) >Agregar</a>`;
        parrafo.innerText = valor.descripcion;
        let imagen = document.createElement("img");
        imagen.src = "img/"+ valor.foto;
        imagen.alt = valor.nombre;
        imagen.width = 160;
        div_hijo2.appendChild(parrafo);
        div_hijo2.appendChild(imagen);
        div_padre.appendChild(div_hijo1);
        div_padre.appendChild(div_hijo2);
        columna.appendChild(div_padre);
        resultado.appendChild(columna);
        
        
    });
})
