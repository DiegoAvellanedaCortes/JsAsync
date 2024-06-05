//Promesas

//Estructura de promesa
const promise= new Promise(function (resolve, reject){
  resolve("Vamos bine")
})

//Ejercicio de promesas 1

const cows=15

const countCows=new Promise(function (resolve, reject){
    if(cows>10){
        resolve(`Tienes ${cows} vacas`)
    }else {
        reject(`Las ${cows} vacas no son suficientes`)
    }
})

countCows.then((result)=>{
    console.log(result)
}).catch((error)=> {
    console.log(error)
}).finally(()=> console.log("Finalizado"))

//Ejercicios de promesas 2

function delay(time, message) {
    return new Promise((resolve, reject) => { 
      if (time === 2000) {
        setTimeout(()=>{
            resolve(message)
        }, time)
      } else { 
        reject("Error en el tiempo")
      }
    })
  }
  
  const funDelay = delay(2000, "Hello after 2s")
  
  funDelay.then((result) => { 
    console.log(result)
  }).catch((error) => { 
    console.log(error)
  }).finally(() => { 
    console.log("Terminamos bien")
  })