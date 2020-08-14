//Natureza Dinamica dos objetos

const mouse = {
    cor : 'red',
    marca : 'dazz'
}

//Podemos adicionar uma proprioedade que não estava no objeto
mouse.velocidade = 5000;
//podemos adicionar uma função
mouse.trocarDPI = function (){
    console.log('Alterando DPI ')
}

//Podemos deletar propriedades do objeto
delete mouse.velocidade
delete mouse.trocarDPI
delete mouse.cor

console.log(mouse)