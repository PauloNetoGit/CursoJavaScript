function sum(n1, n2){
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        //Alert só funciona no navegador
        //return alert("Apenas Números")

        //Tratamento de erros com throw Error
        throw Error("O método sum() aceita apenas números")
    }
    return n1 + n2
}

sum("sa") //esse erro aparece no console do navegador e no terminal