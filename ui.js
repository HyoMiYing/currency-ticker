class UI {
    constructor() {
        this.baseCurrency = document.getElementById('base-currency');
        this.price = document.getElementById('price');
    }

    paint(results) {
        this.baseCurrency.textContent = `1 unit of ${results.base}`;
        this.price.textContent = `is worth ${results.price} units of ${results.target}`;
    }
}