function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();

/* Se utilizar o console.log(userEmail) fora do escopo da função, haverá um erro dizendo que userEmail não é definida -
 a variável só é reconhecida dentro do escopo da função */


 if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

// Utilizamos a VAR para declarar a variavel. 
// Não temos acesso à userAge fora do bloco de código quando usamos let e const para declarar essa variável.

var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas

//

const userInfo = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userInfo.name = 'João';

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }
/* quando usamos o const para criar um objeto, o Javascript nos permite alterar as suas
 propriedades sem, contudo, reatribuir um novo objeto */

 // A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

/* Como você pode ver, a sintaxe do operador ternário é bem simples: x ? y : z.

O x é uma condição que será avaliada como verdadeira ou falsa;
O y é o retorno se a condição for verdadeira;
O z é o retorno se a condição for falsa. */
