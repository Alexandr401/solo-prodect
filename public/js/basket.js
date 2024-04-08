
function calculateTotalPrice() {
    let totalSum = 0;
    document.querySelectorAll('.total').forEach(totalElement => {
        const catalogId = totalElement.dataset.id;
        const quantity = parseInt(totalElement.textContent);
        const price = parseFloat(document.querySelector(`.price[data-id="${catalogId}"]`).textContent);
        totalSum += quantity * price;
    });

    // Обновление отображаемой общей стоимости
    const totalPrice = document.querySelector('.totalPrice');
    totalPrice.textContent = totalSum.toFixed(2);

    // Сохранение общей стоимости в sessionStorage
    saveTotalPrice(totalSum);
}

// Функция обновления количества товара и пересчета общей стоимости
function updateQuantity(catalogId, newQuantity) {
    // Обновление отображаемого количества
    const totalElement = document.querySelector(`.total[data-id="${catalogId}"]`);
    totalElement.textContent = newQuantity;

    // Сохранение нового количества в sessionStorage
    saveQuantity(catalogId, newQuantity);

    // Пересчет и обновление общей стоимости
    calculateTotalPrice();
}

// Сохранение значения количества каждого товара
function saveQuantity(catalogId, quantity) {
    sessionStorage.setItem('quantity_' + catalogId, quantity);
}

// Сохранение общей стоимости всех товаров
function saveTotalPrice(totalPrice) {
    sessionStorage.setItem('totalPrice', totalPrice);
}

// Функция для загрузки и установки сохраненных значений при инициализации страницы
function loadSavedQuantities() {
    document.querySelectorAll('.total').forEach(totalElement => {
        const catalogId = totalElement.dataset.id;
        const savedQuantity = sessionStorage.getItem('quantity_' + catalogId);
        if (savedQuantity !== null) {
            totalElement.textContent = savedQuantity;
        }
    });
    // Пересчет и обновление общей стоимости после загрузки значений
    calculateTotalPrice();
}

document.addEventListener('DOMContentLoaded', () => {
    loadSavedQuantities()
    const downQantBtn = document.querySelectorAll('.downQantBtn');
    const uppQantBtn = document.querySelectorAll('.uppQantBtn');
    const delBasBtn = document.querySelectorAll('.delBasBtn');

uppQantBtn.forEach(button => {
    button.addEventListener("click", (event) => {
        const catalogId = button.getAttribute('data-id');
        const totalElement = document.querySelector(`.total[data-id="${catalogId}"]`);
        let total = parseInt(totalElement.textContent);
        total++;
        updateQuantity(catalogId, total);
    });
});

downQantBtn.forEach(button => {
    button.addEventListener("click", (event) => {
        const catalogId = button.getAttribute('data-id');
        const totalElement = document.querySelector(`.total[data-id="${catalogId}"]`);
        let total = parseInt(totalElement.textContent);
        if (total > 1) {
            total--;
            updateQuantity(catalogId, total);
        }
    });
});

delBasBtn.forEach(button => {
    button.addEventListener("click", async (event) => {
        const catalogId = button.getAttribute('data-id');
        const method = "DELETE";
        const body = JSON.stringify({ catalogId: event.target.dataset.id });
        
        try {
        const data = await fetch(`/api/catalog/${catalogId}`, { method: method, headers: { 'Content-Type': 'application/json' }, body: body });
        if (!data.ok) {
            throw new Error('Ответ сети был неудовлетворительным.');
        }
        const result = await data.json();
        if (result.text === 'OK') {
            button.closest('li').remove();
            location.href = '/basket';
        }
        sessionStorage.removeItem('quantity_' + catalogId);
        updateQuantity(catalogId, total);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    });
});

const baskets = document.forms['basket-form'];
baskets.addEventListener('submit', async (event) => {
    event.preventDefault();
    const items = [];
    document.querySelectorAll('.basket-item').forEach(item => {
      const catalogId = item.querySelector('.total').dataset.id;
      const name = document.querySelector(`.nameFurniture[data-id="${catalogId}"]`).textContent;
      const price = document.querySelector(`button[data-id="${catalogId}"]`);
      const quantity = parseInt(item.querySelector('.total').textContent);
      items.push({catalogId, name, price, quantity});
    });
  
    const email = baskets.elements['email'].value;
    const name = baskets.elements['name'].value;
    const phone = baskets.elements['phone'].value.replace(/[()+-]/gi,'').replace(/\D/g, '');
    const adresse = baskets.elements['adresse'].value;
    const payment = baskets.elements['payment'].value;
    const totalPrice = parseFloat(sessionStorage.getItem('totalPrice'));
  
    const body = {items, totalPrice, email, name, phone, adresse, payment}
    try {
      const data = await fetch('/api/catalog', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) },);
      const result = await data.json();
      if (result.text === 'OK') { location.href = '/';}
    } catch (error) {
      console.error(error);
    }
});
});
