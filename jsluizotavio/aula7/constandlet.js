/*
Rafael Carneiro de Souza tem 26 anos, pesa 90 kg
tem 1.8 de altura e seu IMC é de 30.9259
Rafael Carneiro nasceu em 1995
*/ 
const nome = 'Rafael Carneiro ';
const sobrenome =' de Souza';
const idade = 26;
const peso = 90;
const alturaEMM = 1.80 ;
let imc;// peso / (altura * altura);
let anonascimento;

imc = peso / (alturaEMM * alturaEMM);
anonascimento = 2021 - idade ;
// template strings 
console.log(nome, sobrenome, 'tem', idade, 'anos', 'pesa', peso, 'kg') ;
console.log (`tem, ${alturaEMM} de altura e seu imc é de , ${imc}`);
console.log(`${nome} ${sobrenome}  nasceu em ${anonascimento}`);