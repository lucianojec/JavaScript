//tipo primitivo
const mensagem = 'Minha primeira mensagem'
//tipo objeto
const outramensagem = new String('Outra Mensagem')

console.log(typeof(mensagem))
//saida: string
console.log(typeof(outramensagem))
//saida objeto

console.log((mensagem[2])) //saida: n
console.log((mensagem.includes('primeira'))) //saida: true
console.log((mensagem.includes('vermelho'))) //saida: false
console.log((mensagem.startsWith('Minha'))) //saida: true
console.log((mensagem.startsWith('sua'))) //saida: false
console.log((mensagem.endsWith('mensagem'))) //saida: true
console.log((mensagem.endsWith('ddd'))) //saida: false
console.log((mensagem.indexOf('primeira'))) //saida: 6
console.log((mensagem.replace('Minha', 'Sua'))) //saida: sua primeira mensagem
console.log((mensagem.trim())) //saida: (Aqui o trim retira o espaço excedente)
console.log((mensagem.split(' '))) //saida: (3) ["Minha", "primeira", "mensagem"]
