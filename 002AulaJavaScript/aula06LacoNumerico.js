const prompt = require("readline-sync");
//Exemplo - 2

let maiorNumero = 0;
let numerInformado;

for (let i = 1; i <= 5; i++) {
  numerInformado = Number(prompt.question('Informe um numero positivo: '));

  if (numerInformado > maiorNumero) {
    maiorNumero = numerInformado;
  }
}

console.log("Maior numero:", maiorNumero);



// Estrutura do For 
//Exemplo - 1
// let a;
//Expressao 1: Inicialização da variável de controle;
//Expressao 2: Condição de permanência do for;
//Expressao 3: P incremento da variável de controle;
//Será possivel criar a variavel dentro do for ex : for (let a = 0; a > 5)


// for (expressao 1; expressao 2; expressao 3;) {
  //  O escorpo do for
// }

// for (a = 0; a < 5; a++) {
//   console.log(a);
// }