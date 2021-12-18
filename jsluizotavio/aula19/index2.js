const a ={
    nome:'Rafael',
    sobrenome:'Souza'
};
const b = {...a};
a.nome = 'Jackson';
console.log(a);
console.log(b);