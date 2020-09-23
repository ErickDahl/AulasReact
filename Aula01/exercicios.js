const itens = [
  { nome: "Arroz 1kg", valor: 5.90 },
  { nome: "Feijão Preto 1kg", valor: 8.90 },
  { nome: "Farinha 1kg", valor: 1.50 },
  { nome: "Leite 1l", valor: 4.50 },
  { nome: "Fubá", valor: 2.10 },
  { nome: "Kinder Ovo", valor: 10 },
]
console.log(itens);


// 1.

const desconto = (percentual, itens) => {
  itens.map(item => {
    let valor_desconto = item.valor * (1 - (percentual / 100));
    valor_desconto = parseFloat(valor_desconto).toFixed(2);
    item.valor = valor_desconto;
  })
  
  return itens;
}
  
// console.log('1.', desconto(20, itens));


// 2.

const filtrar_itens_valor = (valor, itens)  => {
  return itens.filter(function (item) {
    return item.valor <= valor;
  });
}
  
var itens_filtrados = filtrar_itens_valor(5, itens)
// console.log('2.', itens_filtrados);
  

// 3.
// const busca_item = (nome, itens) => {
//   return itens.find(item => {
//     return item.nome.indexOf(nome) > -1;
//   })
// }
  
// var item_buscado = busca_item("Fubá", itens);
// console.log('3.', item_buscado);
  

// const busca_item = (nome, itens) => {
//   let resultado = null;

//   itens.map(item => {
//     if(item.nome === nome){
//       resultado = item;
//     }
//   })

//   console.log('3.', resultado);
// }

// busca_item("Fubá", itens);


//4
const desconto_condicional = (valor_elegivel, percentual_desconto, itens) => {
  const itens_filtrados = filtrar_itens_valor(valor_elegivel, itens);
  return desconto(percentual_desconto, itens_filtrados);
}
  
const produtos_com_desconto_condicional = desconto_condicional(5.00, 20, itens);  
console.log('4.', produtos_com_desconto_condicional);
  