//camelCase = sempre inicia com a letra minúscula. Ex.: umDoisTres
//JavaScript - Factory Functions (Função de Fábrica)
// function criarBicicleta(marcaBicicleta,qtdeMarcha,cor){
//     return{
//         marcaBicicleta,
//         qtdeMarcha,
//         cor,
//         pedalar(){
//             console.log('Pedalando a bike...')
//         }
//     }
// }

// const bicicleta1 = criarBicicleta('Monark', 21, 'Azul')
// const bicicleta2 = criarBicicleta('Caloi', 18, 'Vermelha')
// console.log(bicicleta1)
// console.log(bicicleta2)

//PascalCase = sempre inicia com a letra maiúscula. Ex.: UmDoisTres
//Constructor Functions

function Bicicleta(marcaBicicleta,qtdeMarcha,cor){
    this.marcaBicicleta = marcaBicicleta,
    this.qtdeMarcha = qtdeMarcha,
    this.cor = cor,
    this.pedalar = function(){
        console.log('Pedalando a bike...')
    }
}

const bicicleta = new Bicicleta('Monark', 18, 'Preta')
console.log(bicicleta)
console.log(bicicleta.pedalar)