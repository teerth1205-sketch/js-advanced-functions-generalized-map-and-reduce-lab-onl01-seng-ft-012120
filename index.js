// Add your functions here
const map = function(array, fn) {
    let result = []
    
    for (let i = 0; i< array.length; i++){
        result.push(fn(array[i]))
    }
    return result
}

const reduce = function(array, fn, init ) {
    let total = init
    for (let i = 0; i < array.length; i++) {
        if (total === undefined){
        total = array[i]
        }else {
            total = fn(array[i], total)
        }
    }
    return total
}