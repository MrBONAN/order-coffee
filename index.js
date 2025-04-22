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
    checkboxes.forEach((checkbox, i) => {
        checkbox.name = newCheckBoxName;
        checkbox.checked = 0;
    });

    clone.querySelectorAll('input[type="checkbox"]').forEach(chk => chk.checked = false);
    form.insertBefore(clone, document.querySelector('.add-button').parentElement);
});

