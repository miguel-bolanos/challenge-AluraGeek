const ListaProductos = () => {
    return fetch("http://localhost:3000/productos")
    .then(respuesta => respuesta.json())
    .catch(error => console.log("error" + error))
}

export const productosServicios = {
    ListaProductos,
    
}