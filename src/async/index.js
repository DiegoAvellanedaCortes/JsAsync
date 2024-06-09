
//Creación de la promesa

const fnasync= () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=>resolve("Async!"), 2000)
            :reject(new Error("Error!"))
    });
}

//Creación de la función asincrona 
const anotherFn = async () =>{
    const something = await fnasync()
    console.log(something)
    console.log("Hello")
}


console.log("Before");
anotherFn(); //Llamado de la función
console.log("After")