teste1() /* Mesmo que a função teste1 estega lá em baixo, 
           o hoisting tem a capacidade de "içar" a função */
function teste1(){
    console.log("A função está sendo chamada na linha 1");
}

// Aqui o Hoisting não funciona, porque a função está sendo atribuida a uma constante
teste2()

const teste2 = function teste() {
    console.log("teste");
}


