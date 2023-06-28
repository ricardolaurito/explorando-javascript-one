console.log('Trabalhando com condicionais');
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log('Destinos possíveis:');
console.log(listaDeDestinos);

//if (idadeComprador >= 18) {
   // console.log('Comprador maior de idade');
    //listaDeDestinos.splice(1, 1); // removendo um item da lista
//} else if (estaAcompanhada == true) {
    //console.log('Comprador está acompanhado');
   // listaDeDestinos.splice(1, 1); // removendo um item da lista  
//} else {
    //console.log('Comprador não é maior de idade, não posso vender');
//}

if (
    idadeComprador >= 18 || estaAcompanhada == true
    ) {
    console.log('Boa viagem!');
    listaDeDestinos.splice(1, 1); // removendo um item da lista
} else {
    console.log('Comprador não é maior de idade, não posso vender');
}

console.log('Embarque: \n\n');
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log('Boa viagem')
} else {
    console.log('Você não pode embarcar');
}
