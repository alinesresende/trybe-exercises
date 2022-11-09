const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

function clickLink(evento){
  evento.preventDefault();
}

hrefLink.addEventListener('click', clickLink)

function clickCheckbox(evento){
  evento.preventDefault();
}
inputCheckbox.addEventListener('ckick', clickCheckbox)


// Adicione um evento keypress no elemento input type="text" que possui o id input-text.
// Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra ‘a’ minúscula) possa ser digitado na caixinha. 
// (dica: para capturar a tecla digitada, utilize o event.key)
