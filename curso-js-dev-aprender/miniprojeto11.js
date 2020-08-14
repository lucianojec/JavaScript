//Objeto Endereço
//Exericio - Criar um objeto endereço que contem

//Rua
//Cidade
//CEP
//exibirEndereco(endereco)

//Como eu tentei
//Criei uma função para o objeto... primeiro erro
function endereco1(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

//criei a função para exibir, estava certo
function exibirEndereco(endereco){
    return endereco
}

//criei uma constante em um valor que pode sofrer alterações, errado de novo
const novoEndereco = new endereco('Rua São João', 'Floripa', '88060239')
console.log(exibirEndereco(novoEndereco))

//Jeito certo
//Cria o objeto com let, pois pode sofrer alteração
let endereco = {
    rua: 'Rua Canto das Corujas, 257',
    cidade: 'Floripa',
    cep: '88060239'
}

//cria a função e implementa o for in no objeto endereco criado
function exibirEndereco2(){
    for (let chave in endereco)
    console.log(chave, endereco[chave])
}

exibirEndereco2()