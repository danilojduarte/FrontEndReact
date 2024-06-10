const prompt = require("readline-sync");
//Iniciando estudos object Literal {Time 43:15}
// const array = ['Danilo', 39, 1.70, true]

const pessoa = { 
  nome: 'Danilo', 
  idade: 39, 
  altura: 1.69, 
  EhProgramador: true, 
};

//atribuindo novos campos
pessoa.profissao = 'Desenvolvedor';
//alterando campos
pessoa.nome = 'Danilo Duarte';

console.log(pessoa);
console.log(pessoa.nome);
