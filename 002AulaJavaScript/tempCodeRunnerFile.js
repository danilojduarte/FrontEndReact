const prompt = require("readline-sync");

// Aula 08 - Funçoes de Alta Ordem
// HIGH ORDER FUNCTIONS;

// 2º Função que recebe outra função como parâmetro;

// 1º Caso => Função que retornar outra função como parâmetro;
function welcome(couserName) {
  return (studentName) => {
    console.log(
      `Olá, ${studentName}! Seja bem-vinda(o) ao curso de ${couserName}!`
    );
  };
};

const displayWelcomeToFrontEndCourse = welcome("Front-end em react");

displayWelcomeToFrontEndCourse("Danilo")