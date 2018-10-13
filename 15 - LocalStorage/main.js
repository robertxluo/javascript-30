const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const addItem = (e) => {
  e.preventDefault();
  const text = (event.target.querySelector('[name=item')).value;
  const item = {
    text,
    done: false
  }

  items.push(item)
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items));
  event.target.reset();
}

const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input 
          type="checkbox" 
          data-index=${i} 
          id="item${i}" 
          ${plate.done ? 'checked' : ''}
          />
        <label for="">${plate.text}</label>
      </li>
    `;
  }).join('');
}

addItems.addEventListener('submit', addItem)

populateList(items, itemsList);