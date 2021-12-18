/*
Primitivos - string, Number, boolean, undefined, null(bigint, symbol)

Referência (Mutável ) - array, object, fuction - passados por referência 
*/ 
let a = [1, 2, 3 ];
let b = [...a];
let c = b;

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Fael');
console.log(a, c);