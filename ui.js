class UI {
    constructor() {
        this.baseCurrency = document.getElementById('base-currency');
        this.price = document.getElementById('price');
    }

    paint(ticker) {
        this.baseCurrency.textContent = `1 unit of ${ticker.base}`;
        this.price.textContent = `is worth ${ticker.price} units of ${ticker.target}`;
    }
}