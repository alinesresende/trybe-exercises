/* For/in e for/of */

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index, cars[index]);
}

/* Outro exemplo */

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

/* Outro exemplo */
let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
  console.log(position);
};

/* Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in */

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value); //resultado: hamburguer, bife, acarajé;
};

/* Exercícios 
Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome,
substituindo o xxxxx pelo nome em questão. */

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let name in names) {
  console.log("Olá " + names[name])
}

/*Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto. */

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let index in car) {
  console.log(index, car[index])
}
