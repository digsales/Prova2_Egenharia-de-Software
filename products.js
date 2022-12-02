let scanf = require("scanf");

const produtos = [
  {
    nome: "Notebook",
    categoria: "Eletrônico",
    valor: 1999.99,
  },
  {
    nome: "Impressora",
    categoria: "Eletrônico",
    valor: 999.99,
  },
  {
    nome: "Caneta BIC",
    categoria: "Escolar",
    valor: 0.5,
  },
  {
    nome: "Lapiseira Pentel",
    categoria: "Escolar",
    valor: 7.5,
  },
];

const listarValor = (valorMinimo, valorMaximo) => {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].valor >= valorMinimo && produtos[i].valor <= valorMaximo) {
      console.log(produtos[i]);
    }
  }
};

listarValor(7, 1000);
