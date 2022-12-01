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
newEmployees(pessoaContratada);


// 2- Sorteador de loteria

const checkNumbers = (numeroApostado, numeroAlteratorio) => {
  if (numeroApostado === numeroAlteratorio) {
    return 'Parabéns, você ganhou!';
  } else {
    return 'Tente novamente!';
  }
};

const resultadoSorteio = (numeroApostado, checkNumbers) => {
  const numeroAlteratorio = Math.floor(Math.random() * 5);
  return checkNumbers(numeroApostado, numeroAlteratorio)
};
resultadoSorteio(2, checkNumbers);


// Corretor automático de exame

const respostaCertas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostaEstudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const checkRespostas = (respostaCorretas, respostaEstudantes) => {
  let pontuacaoFinal = 0;
  respostaEstudantes.forEach((resposta, index) => {
    if (resposta === respostaCorretas[index]) {
      pontuacaoFinal += 1;
    } if (resposta === 'N.A') {
      return 0;
    } if (resposta !== respostaCorretas[index]) {
      pontuacaoFinal -= 0.5;
    }
  });
  return pontuacaoFinal;
};

const corretorAutomatico = (respostaCorretas, respostaEstudantes, checkRespostas) => {
  const resultado = checkRespostas(respostaCorretas, respostaEstudantes);
  return resultado;
};
corretorAutomatico(respostaCertas, respostaEstudante, checkRespostas);


  



