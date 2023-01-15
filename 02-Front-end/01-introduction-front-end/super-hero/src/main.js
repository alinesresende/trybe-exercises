
const button = document.getElementById('btn');
const imgSuperHero = document.getElementById('img');
const textSuperHero = document.getElementById('text');
const image = document.createElement("img");

button.addEventListener('click', cardsHero)

async function cardsHero() {
  try {
    const randomNumber = parseInt(Math.random() * 500);
    const response = await fetch(
      `https://www.superheroapi.com/api.php/5771591916293646/${randomNumber}`
    );
    const dados = await response.json();
    image.src = dados.image.url;
    imgSuperHero.appendChild(image);
    textSuperHero.innerHTML = dados.name;
  } catch (error) {
    textSuperHero.innerHTML = `Error when making request, ${error.message}`;
  }
}
window.onload = cardsHero();
