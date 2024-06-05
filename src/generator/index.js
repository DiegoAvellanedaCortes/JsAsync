function* gen () {
    yield 1
    yield 2
    yield 3
}

const g = gen()

console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

// Generator con array

function* iterable(array){
    for (let dato of array){
        yield dato
    }
}

const numbers=[1,2,3,4,5,6,7,8,9]

const algo= iterable(numbers)
console.log(algo.next().value)
console.log(algo.next().value)
console.log(algo.next().value)
console.log(algo.next().value)
console.log(algo.next().value)
console.log(algo.next().value)