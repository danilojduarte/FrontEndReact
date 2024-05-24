const prompt = require("readline-sync");

// Do While

let saldo;
//undefind

do {
  saldo = Number(prompt.question("Informe um saldo valido: "));
} while (saldo < 0);

console.log(saldo)






// Programa parama para gerar número aleatorio - exemplo03

// const numeroAleatorio = parseInt(Math.random() * 10);

// // let quantidadeDeTentativas = 0;

// let numeroDoUsuario = Number(
//   prompt.question("Informe um número entre 0 e 10; ")
// );

// console.log(numeroAleatorio)

// while (numeroAleatorio !== numeroDoUsuario) {
//   console.log("Você errou o número! Tente novamente...");
//   numeroDoUsuario = Number(
//     prompt.question("Informe um número entre 0 e 10; "));
// }

// console.log("Parabéns! Você acertou! O número era", numeroAleatorio);









// let notaDoAluno = Number(prompt.question('Informe a nota do aluno: '));

// let somaDasNotas = 0; //Acumulador para saber o valor total das notas;
// let qtdNotasValidas = 0; //Acmulador para saber a quantidade de notas;

// while (notaDoAluno >= 0) {
//   somaDasNotas += notaDoAluno; //Incrementando o acumulador (somaDasNotas)
//   notaDoAluno = Number(prompt.question("Informe a proxima nota: "));
//   qtdNotasValidas++; //Pos incremento;
// }

// console.log(somaDasNotas);
// console.log(qtdNotasValidas);

// console.log("Medias das notas é = ", somaDasNotas / qtdNotasValidas);







// Laços Condicionais (while)
// let saldo = Number(prompt.question("Qual eh o seu saldo? "));

// while (saldo < 0) {
//   saldo = Number(
//     prompt.question("Saldo inválido! Por favor, informe novamente: ")
//   );
// }

// console.log(saldo);

