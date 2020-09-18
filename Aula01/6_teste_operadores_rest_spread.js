const Aluno = {
  nome: 'Pedro Sales',
  idade: 19,
  periodo: 7
}
//REST
const { nome, ...resto } = Aluno;
console.log(nome);
console.log(resto);
// SPREAD
const aluno_ = { ...Aluno, periodo: "setimo", turno: "noite" };
console.log(aluno_);


// REST
function classificacao(primeiro, segundo, terceiro, ...outros) {
  console.log(`No pódio estão: ${primeiro}, ${segundo}, ${terceiro}. Os demais são: ${outros}`);
}

classificacao('Marcos', 'Luana', 'Rogério', 'Fernando', 'Felipe');
// No pódio estão: Marcos, Luana, Rogério. Os demais são: Fernando,Felipe

const coresPrimarias = ['vermelho', 'azul', 'verde'];
const coresSecundarias = ['roxo', 'rosa', 'laranja'];

// SPREAD
const todasCores = [...coresPrimarias, ...coresSecundarias];
console.log('todasCores', todasCores); // [ 'vermelho', 'azul', 'verde', 'roxo', 'rosa', 'laranja' ]