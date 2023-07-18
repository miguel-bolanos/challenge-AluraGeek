const ListaProductos = () => {
    //return fetch("http://localhost:3000/productos")
    return fetch("https://miguel-bolanos.github.io/challenge-AluraGeek/db.json")
    .then(respuesta => respuesta.json())
    .catch(error => console.log("error" + error))
}

export const productosServicios = {
    ListaProductos,
    
}