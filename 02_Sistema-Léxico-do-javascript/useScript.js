 //o "use strict" força a declaração da variávl, 
 //se não tiver o let ou o var o código dá um erro
 //entre outras formas para deixar o código no padrão
 
"use strict"
 let x = 10

  function foo() {
     let y = 23
     return y
  }
  console.log(foo());
  console.log(x);
