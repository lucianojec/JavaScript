
//Clonando objeto
const celular = {
    marcaCelular : 'Asus',
    tamanhoTela: {
        vertical : 155,
        horizontal: 75
    },
    ligar: function () {
        console.log('Fazendo Ligação...')
    }
}

//Clonando utilizando "assign"
//POdemos criar nova propriedade
const novoObjeto1 = Object.assign({
    bateria: 5000
},celular)

console.log(novoObjeto1)

//Clonando objeto utilizando "spread"
//Posso criar propriedade usando o spread???
const novoObjeto2 = {...celular }
console.log(novoObjeto2)

