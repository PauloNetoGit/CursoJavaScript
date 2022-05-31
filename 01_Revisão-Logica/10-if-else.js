//EX01 verificando se está casado
const estaCasado = false

if(estaCasado === true){
    console.log("Você está casado")
} else {
    console.log("Você está solteiro")
}


//EX02 verificando se está casado e se tem filhos, 
//se tiver filhos então vão ao cinema senão ao shopping
const temFilhos = true

if(estaCasado === true){
    console.log("Você está casado")
} else {
    console.log("Você está solteiro")
    if(!temFilhos){
        console.log("vamos ao shopping")
    } else {
        console.log("vamos ao cinema")
    }
}

//EX03 verificar notas. aprovado, reprovado e recuperação

let nota1 = 8
let nota2 = 8
let nota3 = 8

let media = ((nota1 + nota2) + nota3) / 3

if(media >= 0 && media <= 3 ){
    console.log("Reprovado sua nota foi:",media)
} else if( media === 4 || media === 5 ){
    console.log("Em recuperação, sua nota é:",media)
} else if(media >= 6 && media <= 10){
    console.log("Aprovado, sua nota foi:",media)
} else{
    console.log("Error, a nota não é válida",media)
}