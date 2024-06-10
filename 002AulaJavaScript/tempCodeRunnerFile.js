const prompt = require("readline-sync");
//Iniciando estudos object Literal {Time 43:15}
// const array = ['Danilo', 39, 1.70, true]

function funcao(array) {
  let acc = 0;

  for (let elemento of array) {
    acc += elemento;
  }

  return (acc / array.length);
}

console.log(funcao([4, 6, 4, 2]));
