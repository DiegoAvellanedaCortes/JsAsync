const fnasync= () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=>resolve("Async!"), 2000)
            :reject(new Error("Error!"))
    })
}


const anotherFn = async () =>{
    const something = await fnasync()
    console.log(something)
    console.log("Hello")
}