// string,  number, underfined, null, boolean, symbol

const nome = 'Rafael'; // string

const nome1 = "Rafael";// string
const nome2 = `Rafael`;// string

const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; // undefined = não aponta pra local nenhuma na memória
let sobrenomeAluno = null;// nulo -> não aponta |||||||||||
const aprovado = true; // Boolean = true and false (lógico)

console.log(typeof nome, nome);

const a = [1,2];
const b = a ;
console.log(a,b);

b.push(3);
console.log(a, b) ;
