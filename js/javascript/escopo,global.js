// var, let e const
// LEXICO

//var nome = "rafael";
//function teste(){
//  function teste2(){
//   var variavel ="meu nome";
//}
    
//}
//teste();

// GLOBAL
//var a = 0;

//function alterar(){
 //   a =10;
//}
//console.log(a);
//alterar();
//console.log(a);

// Função

//igual o escopo lexico, o que é criado dentro da funçao não está disponivel fora dela.


// Bloco 

/*function bloco(){
    var teste;
    if (true){
        teste ='teste';
        var teste2 = 'teste2';
    }
    console.log('teste', teste);
    console.log('teste2', teste2);

}
bloco();*/

//Hoisting
function bloco(){
    var teste;
    if (true){
        teste ='teste';
        var teste2 = 'teste2';
    }
    console.log('teste', teste);
    console.log('teste2', teste2);

}
bloco();