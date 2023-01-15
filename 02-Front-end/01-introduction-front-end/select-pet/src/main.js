const buttonDog = document.getElementById('btn-dog');
const buttonCat = document.getElementById('btn-cat');
const buttonSuprise = document.getElementById('btn-suprise');
const spaceImg = document.getElementById('imagem');
const image = document.createElement("img");

buttonDog.addEventListener('click', imgDog)
buttonCat.addEventListener('click', imgCat)
buttonSuprise.addEventListener('click', imagSuprise)

function createImg(link) {
  spaceImg.appendChild(image)
  image.style.width = '500px';
  image.style.height = '500px';
  image.src = link
}

async function imgDog() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const dados = await response.json()
  createImg(dados.message)
  }

async function imgCat() {
  const response = await fetch('https://aws.random.cat/meow')
  const dados = await response.json()
  createImg(dados.file)
}  

async function imagSuprise() {
  const response = await Promise.any([fetch('https://aws.random.cat/meow'), 
  fetch('https://dog.ceo/api/breeds/image/random')])
  const dados = await response.json()
  createImg(dados.file || dados.message)
}
