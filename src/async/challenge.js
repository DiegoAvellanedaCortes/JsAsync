import fetch from "node-fetch";
const API="https://api.escuelajs.co/api/v1"

async function fetchData (urlApi){    // Forma 1 de usar Async
    const response=await fetch(urlApi)  // Fetch para la API
    const data= await response.json()   // COnvertir resultado en Json
    return data
}

const anotherFuntion= async (urlApi) => { //Forma 2 de usar Async
    try{

        //Cada variable corresponde a una petición

        const products=await fetchData(`${urlApi}/products`)
        const productWhereId= await fetchData(`${urlApi}/products/${products[0].id}`)
        const category= await fetchData(`${urlApi}/categories/${productWhereId.category.id}`)

        console.log(products[0])
        console.log(productWhereId.title)
        console.log(category.name)
    }catch (error){
        console.error(error)
    }
}

anotherFuntion(API) // Llamanos la función que tiene las peticiones (anotherFunction) y esta a su vez llama a la función fetchData
