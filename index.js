fetchPeople();
async function fetchPeople() {
  try {
    const response = await fetch('http://hp-api.herokuapp.com/api/characters');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const cardsFilter = document.querySelector('[data-js=filter]');
const cardsContainer = document.querySelector('[data-js=cards]');

renderCards();

function renderCards() {
  cardsContainer.innerHTML = '';
  cards.forEach(card => {
    const cardElement = document.createElement('li');
    cardElement.className = 'card';
    cardElement.innerHtml = ``;
  });
}
