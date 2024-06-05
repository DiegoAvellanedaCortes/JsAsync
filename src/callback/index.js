//Aprendiendo Callback

function suma(numero1, numero2) {
    return numero1+numero2
}

function calc(numero1,numero2, Callback){
    return Callback(numero1,numero2)
}

console.log(calc(2,5, suma))  //pasamos como ultimo parametro la función suma NO son necesarios los ()

//setTimeout con función anonima
setTimeout(function () {
    console.log("Hola despues de 2 segundos")
}, 2000)

//setTimeout pasando función con parametros
function gretting (name){
    console.log(`Hola ${name}`)
}

setTimeout(gretting,2000, "Diego Avellaneda")  // setTimeout(funcion, tiempo, parametros_de_funcion)