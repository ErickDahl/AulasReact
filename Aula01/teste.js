// const Aluno = { 
//   nome: 'Pedro Sales', 
//   idade: 19, 
//   periodo: 7,
//   local: "Teresópolis"
// } 
// console.log(Aluno); 

// REST 
// const { nome, ...rest } = Aluno; 
// console.log(nome); 
// console.log(rest); 

// SPREAD 
// const aluno2 = { ...Aluno, periodo: "setimo", turno: "noite" }; 
// console.log(aluno2);

const tarefas = [
  {
    descricao: "Aprender React",
    autor: "Diego",
    local: "Teresópolis",
    concluido: true
  },
  {
    descricao: "Aprender React Native",
    autor: "Antonio",
    local: "Petrópolis",
    concluido: false
  },
]

console.log("Tarefas Original", tarefas);

const nova_tarefa = {
  descricao: "Aprender CSS",
  autor: "Arthur",
  local: "Petrópolis",
  concluido: false
};

const todas_tarefas = [...tarefas, nova_tarefa];
console.log("Todas as tarefas", todas_tarefas);



console.log(parseFloat(10).toFixed(2));







  

