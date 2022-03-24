// falsy values - 
// 0, "", Nan, undedfined, null, false 

if (true) {
    console.log("true")
} else{
    console.log("false")
}

console.log()
            // 0, "", Nan, undedfined, null, false 
if (false) {//qualquer valor descrito no comentario acima irá pular para o bloco de false
    console.log("true")
} else{
    console.log("false")
}

console.log()
           
if ("false") {//agora temos uma string entre aspas, seu valor está preenchido. aqui irá exibir true
    console.log("true")
} else{
    console.log("false")
}

console.log()

let x

if (x) {// a variável 'x' não está definida(undedfined) o resultado disso é false
    console.log("true")
} else{
    console.log("false")
}