//XMLHttp Request

//Creamos una variable para importar XMLHttp Request
const XMLHttpRequest= require("xmlhttprequest").XMLHttpRequest

//Creamos una variable para la ruta de la API
const API="https://api.escuelajs.co/api/v1"

function fetchData(urlApi, callback){
    let xhttp= new XMLHttpRequest()  //Variable para referenciar XMLHttpRequest

    xhttp.open("GET", urlApi, true)  //Abrir la conexión con el API ("Metodo", "URL", true)
    xhttp.onreadystatechange=function (event){  // onreadystatechange => escucha los estados de la solicitud, lista la información
        if(xhttp.readyState === 4){     //Estados del ready State 0=>Sin inicializar 1=>lounding 2=> ya se ejecuto el valor de sent
                                        //3=> Trabajando en la solicitud 4=>completada la información
            if(xhttp.status===200){     //Validar respuesta del servidor
                callback(null, JSON.parse(xhttp.responseText))// Transforma la respuesta de texto a un Json
            }else {
                const error= new Error("Error "+ urlApi) 
                return callback(error, null)
            }
        } 
    }
    xhttp.send()
}

fetchData(`${API}/products`, function (error1, data1){
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[4].id}`, function (error2, data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[4])
            console.log("Id del producto: ",data1[4].id)
            console.log("Este es el título: ",data2.title)
            console.log("Nombre: ",data3.name)
        })
    })       
})
