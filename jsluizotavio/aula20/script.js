//alert('hello wolrd');
function meuescopo() {
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

const people =[];

function recebeEventoform (evento) {
  evento.preventDefault();
  const nome = form.querySelector('.name');
  const sobrenome = form.querySelector('.last-name');
  const peso  = form.querySelector('.weight');
  const altura = form.querySelector('.height');  


  people.push({
    nome: nome.value,
    sobrenome: sobrenome.value,
    peso: peso.value,
    altura: altura.value

  });

console.log(people);

resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}  ${peso.value} ${altura.value}</p>`;
}
form.addEventListener('submit', recebeEventoform);

}
meuescopo();


/*let contador = 1;
evento.preventDefault();
    console.log(`form não foi enviado ${contador}`);
    contador++;
*/ 
/*form.onsubmit = function (evento){
evento.preventDefault();
alert(1);
console.log('Foi enviado.');

};*/