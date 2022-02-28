fetch('http://hp-api.herokuapp.com/api/characters')
  .then(response => response.json())
  .then(data => renderCards(data))
  .catch(error => console.log(error));

const cardsContainer = document.querySelector('[data-js=cards]');
const filterForm = document.querySelector('[data-js=filter-form]');

let currentFilter = 'all';

filterForm.addEventListener('change', () => {
  currentFilter = filterForm.elements['tag-filter'].value;
  renderCards();
});

function renderCards(data) {
  cardsContainer.innerHTML = '';

  data
    .filter(
      card => card.house.includes(currentFilter) || currentFilter === 'all'
    )
    .forEach(card => {
      const cardElement = document.createElement('li');
      cardElement.className = 'card';
      cardElement.innerHTML = `
    <h2>${card.name}</h2>
    <ul>
    <li>${card.house}</li>
    <li>Is a Wizard? ${card.wizard}</li>
    <li>${card.species}</li>
    <li>${card.gender}</li>
    </ul>
    `;
      cardsContainer.append(cardElement);
    });
}

renderCards();

export default renderCards;
