//let isValid = false

//01 - função auto invocadas
/**
 * 
 (function(){
     let isValid = false
     console.log("Menu", isValid);
 
     function init() {
         console.log("init do menu");
     }
     init()
 })()
 * 
 */


//02 - função auto invocadas com parâmetros
(function(n1, n2, n3, win){
    let isValid = false

    console.log("Menu", isValid, n1,n2,n3, win.alert("Fala Garoto")); //exibindo o valor definido na ultima linha desta função

    function init() {
        console.log("init do menu com parâmetros");
    }
    init()
})(10, 20, 30, window) // definindo o valor dos 3 parâmetros 