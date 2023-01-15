
const button = document.getElementById('btn');
const imgSuperHero = document.getElementById('img');
const textSuperHero = document.getElementById('text');
const image = document.createElement("img");

button.addEventListener('click', cardsHero)

function cardsHero(){
  const randomNumber = parseInt(Math.random() * 500)
  fetch(`https://www.superheroapi.com/api.php/5771591916293646/${randomNumber}`)
    .then(response => response.json())
    .then((data) => {
      image.src = data.image.url
      imgSuperHero.appendChild(image)
      textSuperHero.innerHTML = data.name
    })
    .catch((error) => {
     textSuperHero.innerHTML = `Error when making request, ${error.message}`
    })
}
window.onload = cardsHero()
