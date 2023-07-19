import { productosServicios } from "../servicios/productos-servicios.js";

const nuevoProducto = (name,imageUrl,price,id) =>{
    const card = document.createElement("div")
    const contenido = `
            <figure>
                <img src="${imageUrl}" alt="">
            </figure>
            <h1 class="producto__estandar--Titulo" >${name}</h1>
            <p>${price}</p>
            <a href="">ver producto</a>`
card.innerHTML = contenido;
card.classList.add("producto__estandar--producto")
card.dataset.id = id
return card
}

const wars = document.querySelector("[data-wars]")
const Consolas = document.querySelector("[data-Consolas]")
const Diversos = document.querySelector("[data-Diversos]")

productosServicios.ListaProductos().then(data => {
    data.forEach(({name,imageUrl,price,id}) => {

        const nuevaLinea = nuevoProducto(name,imageUrl,price,id);
        const nuevaLinea2 = nuevoProducto(name,imageUrl,price,id);
        const nuevaLinea3 = nuevoProducto(name,imageUrl,price,id);
        wars.appendChild(nuevaLinea);
        Consolas.appendChild(nuevaLinea2);
        Diversos.appendChild(nuevaLinea3);
    });
}).catch((error) => console.log("ocurrio un error" + error))



/*
<div class="producto__Consolas--producto">
                    <figure>
                        <img src="imagenes/Skill.png" alt="">
                    </figure>
                    <h1>Producto XYZ</h1>
                    <p>$ 60,00</p>
                    <a href="">ver producto</a>
</div>
*/