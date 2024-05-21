const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual eh a sua idade? '))

const ehMaiorDeIdade = idade >= 18;