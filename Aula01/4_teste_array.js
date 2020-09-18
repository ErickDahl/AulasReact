var numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(function (numero) {
  console.log('forEach', numero);
});

// map
var dobro = numeros.map(function (numero) {
  return numero * 2
});
console.log('map', dobro); // 2, 4, 6, 8, 10

// filter
var maioresQueTres = numeros.filter(function (numero) {
  return numero > 3
});
console.log('filter', maioresQueTres); // 4, 5

// find
var tres = numeros.find(function (numero) {
  return numero === 3;
});
console.log('find', tres); // 3
