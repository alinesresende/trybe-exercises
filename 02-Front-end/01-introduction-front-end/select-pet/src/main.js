const buttonDog = document.getElementById('btn-dog');
const buttonCat = document.getElementById('btn-cat');
const buttonSuprise = document.getElementById('btn-suprise');
const spaceImg = document.getElementById('imagem');
const image = document.createElement("img");

buttonDog.addEventListener('click', imgDog)
buttonCat.addEventListener('click', imgCat)
buttonSuprise.addEventListener('click', imagSuprise)

function imgDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((dados) => {
      image.src = dados.message
      spaceImg.appendChild(image)
    })
  }

function imgCat() {
  fetch('https://aws.random.cat/meow')
  .then((response) => response.json())
  .then((dados) => {
    image.src = dados.file
    spaceImg.appendChild(image)
  })
}  

function imagSuprise() {
  Promise.any([fetch('https://aws.random.cat/meow'), 
  fetch('https://dog.ceo/api/breeds/image/random')])
  .then((response) => response.json())
  .then((dados) => 
  image.src = dados.file || dados.message)
  spaceImg.appendChild(image)
}
