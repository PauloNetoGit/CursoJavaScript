//Criar um array com números randômicos não repetidos

function generateRandomInt(max) {
    return parseInt(Math.random() * max)
}

let arr = []

while (arr.length < 20) {
    let randomNumber = generateRandomInt(30)
    console.log(randomNumber);

    if(arr.indexOf(randomNumber) < 0){
        arr.push(randomNumber)
    }
}

console.log(arr);