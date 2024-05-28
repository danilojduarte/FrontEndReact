const prompt = require("readline-sync");

//Funções {1} - Finalizado parte 1 - Iniciando parte II
function saudacao(nomeDoEstudante, curso = "Front-end em React") {
  //tamplate string Ou tamplete literals

  return `Olá, ${nomeDoEstudante}! Seja bem vindo ao curso de ${curso}`;
}

const mensagemDeSaudacao = saudacao("Danilo", "React"); // Chamada da function saudacao

console.log(mensagemDeSaudacao);


