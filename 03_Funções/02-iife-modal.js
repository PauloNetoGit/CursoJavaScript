//let isValid = true

/*
    Quando usamos o "var" o valor true sobrescreve o valor false
*/
//var isValid = true

//função auto invocadas
(function(){
    let isValid = true
    console.log("Modal", isValid);

    function init() {
        console.log("init do modal");
    }
    init()
})()