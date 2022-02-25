fetch('http://hp-api.herokuapp.com/api/characters')
  .then(response => response.json())
  .then(data => renderCards(data))
  .catch(error => console.log(error));

/*const cardsFilter = document.querySelector('[data-js=filter]');*/
const cardsContainer = document.querySelector('[data-js=cards]');

function renderCards(data) {
  cardsContainer.innerHTML = '';

  data.forEach(card => {
    /*.filter(
    (card) => card.tags.includes(currentFilter) || currentFilter === "all"*/

    const cardElement = document.createElement('li');
    cardElement.className = 'card';
    cardElement.innerHTML = `
    <h2>${card.name}</h2>
    <ul>
    <li${card.house}</li>
    <li>Is a Wizard? ${card.wizard}</li>
    <li>${card.species}</li>
    <li>${card.gender}</li>
    </ul>
    `;
    cardsContainer.append(cardElement);
  });
}

export default renderCards;
