import fetch from "node-fetch"; 

const API="https://api.escuelajs.co/api/v1"

function postData(urlApi, data){
    const response=fetch(urlApi,{
        method:"POST",          //  El metodo debe estar escrito en mayúscula
        mode:"cors",
        credentials:"same-origin",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return response
}

//data => corresponde a la estructura de datos requerida por la API

const data={
    "title": "Colombia",
    "price": 12345,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`,data)
    .then(response => response.json())
    .then(data => console.log(data))