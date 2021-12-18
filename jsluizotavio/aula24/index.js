/*
if
else 
if e else
Entre 0 - 11 - Bom dia 
Entre 12 - 17 good afternoon
entre 18 - 23 - goodevening
*/
/*
IF pode  ser executado sozinho
Else preciso de um IF antes 
Eu posso ter vários elses e ifs na checagem 
So posso ter um Else na checagem  
*/
const hora = 30;


if (hora >= 0  && hora <= 11){
    console.log('good morning');
} else if (hora >= 12 && hora <= 17){
console.log('good afternoon')
} else if (hora >= 18 && hora <= 23) {
console.log('good evening ')
}else {
    console.log('ERRO')
}