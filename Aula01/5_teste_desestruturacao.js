const VideoGame = {
  modelo: 'PlayStation',
  fabricante: 'Sony',
  midia: 'Blu-Ray',
  armazenamento: '1TB',
  controles: 2,
  preco: 'R$ 2000.00'
}

//Sem Desestruturação
let valor_com_virgula = VideoGame.preco.replace(".", ",");
console.log(VideoGame.modelo + " " + valor_com_virgula);


//Com Desestruturação
const { preco, modelo } = VideoGame;

valor_com_virgula = preco.replace(".", ",");

console.log(`${modelo} ${valor_com_virgula}`);


const params = {
  resposta: '200',
  total: '56.50',
  itens: ['caderno', 'lápis', 'borracha']
}

// function mostrarMaterialOrdenado(itens, total) {
//   itens.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`);
//   });
//   console.log(`total = ${total}`)
// }


function mostrarMaterialOrdenado({ itens, total }) {
  itens.forEach((item, index) => {
    console.log(`${index + 1} - ${item}`);
  });
  console.log(`total = ${total}`)
}

// mostrarMaterialOrdenado(params.itens, params.total);
mostrarMaterialOrdenado(params);
