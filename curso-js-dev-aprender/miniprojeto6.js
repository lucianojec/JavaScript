//Tirar duvida na linha 15 como Denny

//Criar um metodo para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

function exibirPropriedades(obj){    
    for (prop in obj){ //loop for utilizado para iterar as propriedades do objeto
        if (typeof obj[prop] === 'string'){ //eu não entendi essa parte. O cara disse que tem de ser dessa forma
            console.log(prop, obj[prop])
        }
    }
}

exibirPropriedades(filme)