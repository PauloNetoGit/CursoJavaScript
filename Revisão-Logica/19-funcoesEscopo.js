let n = "Global" // declarando uma variável Global

function mostrarN(){
    let n = "Local" // alterando a mesma variável para local
    console.log("Valor de n é:",n);
}

mostrarN();

console.log("Valor de n é:",n);


// var gera um escopo de função
// let e const gera escopo de bloco

function exibir(){
    if (true) {
        var x1 = "dentro do if com var"
        let x2 = "dentro do if com let"       
        
        console.log(x2, "--- A variável x2 Só funciona dentro do bloco porque é let");
    }
    console.log(x1);
    //console.log(x2); //esse comando dará ERRO, porque ele só é rodado dentro do bloco de if
}

exibir()

