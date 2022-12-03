// Conteúdo Reduce

// O reduce recebe dois parâmetros: o primeiro é uma callback, e o segundo parâmetro é um valor inicial (que é opcional).

// A sintaxe do reduce é a seguinte:
array.reduce(callback, valorInicial);

// O valorInicial é o valor da primeira iteração e, em geral, ao realizar somas, esse valor é 0.

// Já a callback é a função que vai passar por cada um dos itens do array, e ela pode receber até 4 parâmetros, sendo eles:

// Acumulador: que é o valor que vai ser acumulado a cada iteração;
// Valor atual: que é o valor atual do item, a ser adicionado no acumulador;
// Index atual: que é o index do item que está sendo iterado naquele momento;
// Array: que é o array original.
// Veja abaixo a estrutura completa do reduce:
