const person1 = {
    nome : 'Rafael', 
    sobrenome: 'Souza', 
    idade:26,

    SPEAK (){
        console.log(`i'm years old is ${this.idade}.`);
    },
    moreidadeIdade(){
        this.idade++;
    }
};
person1.SPEAK();
