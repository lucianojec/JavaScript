//criar uma função que exiobe a quantidade de * 
// que aquela linha possui



exbirAsteriscos(10)

function exbirAsteriscos(linhas){
    // let padrao = '';
    // for (let linha = 1; linha <= linhas; linha++){
    //     padrao += '*'
    //     console.log(padrao)
    // }

    //loop nested ou loop interior ou loop nestado
    for (let linha = 1; linha <= linhas; linha++){
        let padrao = ''
        for(let i = 0; i < linha; i++){
            padrao += '*'
        }
        console.log(padrao)
    }
}