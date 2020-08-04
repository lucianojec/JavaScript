//Objetivo: Trocar os valores

let a = 'vermelho'
let b = 'azul'

let c = a;
a = b;
b = c;

console.log(a)
console.log(b)

let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + tonalidade;
};

