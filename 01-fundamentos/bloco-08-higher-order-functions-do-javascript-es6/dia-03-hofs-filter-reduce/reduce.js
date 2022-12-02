// Conteúdo Reduce

// A sintaxe do reduce é a seguinte:
array.reduce(callback, valorInicial);

// O valorInicial é o valor da primeira iteração e, em geral, ao realizar somas, esse valor é 0.

// Já a callback é a função que vai passar por cada um dos itens do array, e ela pode receber até 4 parâmetros, sendo eles:

// Acumulador: que é o valor que vai ser acumulado a cada iteração;
// Valor atual: que é o valor atual do item, a ser adicionado no acumulador;
// Index atual: que é o index do item que está sendo iterado naquele momento;
// Array: que é o array original.

// Estrutura completa do reduce:
array.reduce((acumulador, valorAtual, indexAtual, array) => { "código" }, valorInicial);

// escopo:
array.reduce((acc, curr) => {
  // escopo de execução da função
}, valorInicial);

// A função do acumulador (acc) é guardar o retorno da callback a cada iteração, 
// e a função do curr é acessar cada um dos valores do array.
