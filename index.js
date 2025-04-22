document.querySelector('.add-button').addEventListener('click', () => {
    const form = document.querySelector('form');
    const firstBeverage = form.querySelector('.beverage');
    const beverages = form.querySelectorAll('.beverage');
    const clone = firstBeverage.cloneNode(true);
    const newNumber = beverages.length + 1;
    clone.querySelector('.beverage-count').textContent = `Напиток №${newNumber}`;
    clone.querySelector('select').selectedIndex = 1;

    const newRadioName = 'milk-' + Date.now();
    const radios = clone.querySelectorAll('input[type="radio"]');
    radios.forEach((radio, i) => {
        radio.name = newRadioName;
        radio.checked = i === 0;
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '×';
    deleteButton.className = 'delete-btn';
    deleteButton.type = 'button';

    clone.style.position = 'relative';
    deleteButton.style.position = 'absolute';
    deleteButton.style.top = '10px';
    deleteButton.style.right = '10px';
    deleteButton.style.background = 'none';
    deleteButton.style.border = 'none';
    deleteButton.style.fontSize = '20px';
    deleteButton.style.cursor = 'pointer';

    deleteButton.addEventListener('click', () => {
        if (document.querySelectorAll('.beverage').length > 1) {
            clone.remove();
            const beverages = document.querySelectorAll('.beverage');
            beverages.forEach((beverage, index) => {
                beverage.querySelector('.beverage-count').textContent = `Напиток №${index + 1}`;
            });
        }
    });

    clone.prepend(deleteButton);

    const newCheckBoxName = 'options-' + Date.now();
    const checkboxes = clone.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.name = newCheckBoxName;
        checkbox.checked = 0;
    });

    clone.querySelectorAll('input[type="checkbox"]').forEach(chk => chk.checked = false);
    form.insertBefore(clone, document.querySelector('.add-button').parentElement);
});

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-button');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.modal-close');
    function showModal() {
        modalOverlay.style.display = 'block';
        modal.style.display = 'block';
        const beverages = document.querySelectorAll('.beverage').length;
        modal.querySelector('p').textContent = `Заказ принят! Вы заказали ${beverages} напитков`;
    }

    function hideModal() {
        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
    }

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        showModal();
    });

    closeButton.addEventListener('click', hideModal);
    modalOverlay.addEventListener('click', hideModal);
});
