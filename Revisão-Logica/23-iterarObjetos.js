const pessoa = {
  nome: "Maria",
  idade: 28,
  "e-mail": "maria@server.com",
};

//ForIn
//para cada "propriedades" dentro do objeto "pessoa".
for (const propriedades in pessoa) {
  console.log(pessoa[propriedades]);
}


