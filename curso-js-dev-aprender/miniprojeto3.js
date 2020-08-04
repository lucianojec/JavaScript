//fizzbuzz
// divisivel por 3 => Fizz
// divisivel por 5 => Buzz
// divisivel por 3 e 5 => FizzBuzz
// Não divisivel por 3 ou 5 => retorna o numero de entrada/parametro
// Não é um numero => 'Não é um numero'

function fizzBuzz(entrada){
    if (typeof(entrada) !== "number"){
        return 'Não é um numero'
    }
    if ((entrada % 3 === 0) && (entrada % 5 === 0)){ 
        return 'FizzBuzz'
    }
    if (entrada % 3 === 0) {
        return 'Fizz'
    }
    if (entrada % 5 === 0) {
        return 'Buzz'
    }
    return entrada    
}

console.log(fizzBuzz(7))