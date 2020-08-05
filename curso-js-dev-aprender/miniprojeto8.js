// Exercicio nota escolar
// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [70,70,80]
// media 75

console.log(mediaDoAluno(array))

function mediaDoAluno(notas){
    
    let media = 0
    for (i=0;i > notas.length; i++)
        media += notas[i]        
    media = media / media.length
    console.log(media.length)

    switch (media) {
        case media > 0 && media <= 59:
            return 'E'
            break
        case media > 59 && media <= 69:
            return 'D'
            break
        case media > 69 && media <= 79:
            return 'C'
            break
        case media > 79 && media <= 89:
            return 'B'
            break
        case media > 89 && media <= 100:
            return 'A'
            break

    }

}