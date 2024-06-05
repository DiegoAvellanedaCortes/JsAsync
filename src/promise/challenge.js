import fetch from "node-fetch"
const API="https://api.escuelajs.co/api/v1"

function fetchData(urlApi){
    return fetch(urlApi)
}

/*
fetchData(`${API}/products`)                   //then => podemos saber que hay en la respuesta 
    .then(response => response.json())         //Transforma la respuesta a un formato JSON() 
    .then(products => {
        console.log(products)
    })
    .then(()=>{
        console.log("Go the win")
    })
    .catch(error => console.log(error))

    //Tenemos que agregar en el package.json  un atributo "type":"module"
*/

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products =>{
        console.log(products[0])
        console.log("Id del producto: ",products[0].id)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response=> response.json())
    .then(product => {
        console.log("Título del producto: ",product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log("Nombre de la categoría: ",category.name)
    })
    .catch((error)=> console.log(error))
    .finally(()=> console.log("Finalizado"))