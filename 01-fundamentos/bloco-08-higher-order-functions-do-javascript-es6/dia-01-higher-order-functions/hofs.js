// Exercícios parte I
// 1 - Nova pessoa contratada

const pessoaContratada = (nome) => {
  return { Nome: nome, email: `${nome}@trybe.com` };
};

const newEmployees = (pessoaContratada) => {
  const employees = {
    id1: pessoaContratada("PedroGuerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: pessoaContratada("LuizaDrumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: pessoaContratada("CarlaPaiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};
console.log(newEmployees(pessoaContratada));


// 2- Sorteador de loteria

// const sorteio = () => {

// }

// Math.floor(Math.random() * 5 + 1)
// sorteio.forEach(element => {
  
// });

