let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
  ];

console.log('Listando tarefas');
for (let i = 0; i < tarefas.length; i++) {
console.log(`${i + 1} - ${tarefas[i]}`);
}

let tarefasPendentes = tarefas.filter(tarefa => !tarefa.includes('Feito'));
console.log('\nTarefas pendentes:');
console.log(tarefasPendentes);


tarefas.sort();
console.log('\nArray ordenado');
console.log(tarefas);


let primeirasTarefas = tarefas.slice(0,2);
console.log('\nArray com as primeiras tarefas');
console.log(primeirasTarefas)



tarefas.pop();
console.log('\nArray sem a última tarefa do array ordenado');
console.log(tarefas);


tarefas.push('Ler livro novo');
console.log('\nArray atualizado');
console.log(tarefas);