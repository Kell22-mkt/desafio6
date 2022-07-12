
// Crie um objeto que receba ao menos três propriedades sobre você.

let sobre = {
    nome:'kelly',
    idade:23,
    pais:'Brasil'
}


// Adicione uma nova propriedade sem alterar seu objeto inicial.

sobre.signo = 'cancer'

// Remova uma propriedade desse objeto.

delete sobre.idade

//Mostre no console todas as propriedades desse objeto.
console.log(sobre)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.



let cadastro = [
    {
      nome: 'Fabiana',
      idade: '24',
      telefone: '11958612108',
      amigos: ['Cida', 'Wdson', 'Solange', 'Beatriz'],
    },
    {
      nome: 'Fabricio',
      idade: '18',
      telefone: '11958612108',
      amigos: ['Marcos', 'Paulo', 'Douglas', 'Rafael'],
    },
    {
      nome: 'Robson',
      idade: '34',
      telefone: '11958612108',
      amigos: ['Lucas', 'Carlos', 'Jorge', 'Luiza'],
    },
    {
      nome: 'Cibele',
      idade: '20',
      telefone: '11958612108',
      amigos: ['Robson', 'Malcolm', 'Jesner', 'jean'],
    },
    {
      nome: 'Maria',
      idade: '30',
      telefone: '11958612108',
      amigos: ['Ana', 'larissa', 'Cintia', 'Michele'],
    },
  ];
  
  

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[1]);
  console.log(cadastro[1].amigos[2]);
  console.log(cadastro[2].amigos[0]);
  console.log(cadastro[3].amigos[1]);
  console.log(cadastro[4].amigos[3]);