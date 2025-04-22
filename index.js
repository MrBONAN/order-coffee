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
    clone.querySelectorAll('input[type="checkbox"]').forEach(chk => chk.checked = false);
    form.insertBefore(clone, document.querySelector('.add-button').parentElement);
});