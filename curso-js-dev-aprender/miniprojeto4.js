// Velocidade máxima de até 70
// a cada 5km acima do limite voce ganha 1 ponto
// Math.Floor()
// caso pontos maior que 12 -> "Carteira Suspendida"

function verificarVelocidade(velocidadeCapturada) {
    
    const velocidadePermitida = 70
    const kmPorPonto = 5
    if (velocidadeCapturada <= velocidadePermitida) {
        console.log('Passou')
    }else{
        const pontos = Math.floor((velocidadeCapturada - velocidadePermitida)/ kmPorPonto)
        if (pontos >= 12){
            console.log('Carteira suspensa!')
        }else{
            console.log('Pontos: ', pontos )
        }
    }    
}

verificarVelocidade(180)