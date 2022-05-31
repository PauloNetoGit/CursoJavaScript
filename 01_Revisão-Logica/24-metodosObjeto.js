//Comprar caneta exemplo comum
/*
const produto = {
    nome: "Caneta",
    qtd: 10
}

function comprarCaneta(qtd) {
    this.qtd = qtd
    return produto.qtd += qtd
} 

comprarCaneta(5)

function venderCaneta(qtd) {
    this.qtd = qtd
    return produto.qtd -= qtd
}

venderCaneta(12)

console.log(produto)
*/

//Usando Métodos no Objeto
const outroProduto = {
    nome: "Caneta Azul",
    qtdCanetasNoEstoque: 10,
    //Método Comprar
    comprar(quantidadeCanetasCompradas){
        if (quantidadeCanetasCompradas >= this.qtdCanetasNoEstoque) {
            return console.log("Quantidade não disponível, aqui é mostrado o objeto this referenciando o método 'outroProduto' ->",this);
        } 
        this.qtdCanetasNoEstoque -= quantidadeCanetasCompradas
    },
    //Método 'teste' com Arrow Function
    teste:() => {
        console.log('Com Arrow Function o this não referencia o objeto "outroProduto", O objeto this está vazio ->',this)
       
    }
}

//outroProduto.comprar(15)
//console.log(outroProduto);

outroProduto.comprar(11)
outroProduto.teste()
console.log(outroProduto);