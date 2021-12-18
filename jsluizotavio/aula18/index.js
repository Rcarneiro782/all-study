function criapessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

    };
}
const pessoa1 = criapessoa('Rafael', 'Carneiro', 26);
const pessoa2 = criapessoa('gabriel', 'santos', 26);
const pessoa3 = criapessoa('Rafa', 'miranda', 26);
const pessoa4 = criapessoa('fael', 'souza', 26);
const pessoa5 = criapessoa('Raphael', 'lucas', 26);
console.log(pessoa1.nome, pessoa2.sobrenome);