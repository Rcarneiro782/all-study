let num1 = 2.3;
let num2 = 2.5;

num1 += num2; // 4.8
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2))


console.log(num1);
console.log(Number.isInteger(num1));