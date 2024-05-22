const prompt = require("readline-sync");
let notaDoAluno = Number(prompt.question('Informe a nota do aluno: '));

let somaDasNotas = 0; //Acumulador para saber o valor total das notas;
let qtdNotasValidas = 0; //Acmulador para saber a quantidade de notas;

while (notaDoAluno >= 0) {
  somaDasNotas += notaDoAluno; //Incrementando o acumulador (somaDasNotas)
  notaDoAluno = Number(prompt.question("Informe a proxima nota: "));
  qtdNotasValidas++; //Pos incremento;
}

console.log(somaDasNotas);
console.log(qtdNotasValidas);

console.log("Medias das notas é = ", somaDasNotas / qtdNotasValidas);