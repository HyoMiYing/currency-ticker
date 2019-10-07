// Init storage
const storage = new Storage();
// Get stored data
const tickerValue = storage.getStoredTicker();
// Init Ticker object
const ticker = new Ticker(tickerValue.base, tickerValue.target);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getTicker);

// Change currencies
document.getElementById('currency-change-btn').addEventListener('click', (e) => {

    const base = document.getElementById('base-currency-input').value;
    const target = document.getElementById('target-currency-input').value;

    // Change curencies
    ticker.changeCurrencies(base, target);

    // Set currencies in LS
    storage.setTicker(base, target);

    // Get and display ticker
    getTicker();

    // Close modal
    $('#currencyModal').modal('hide');
});


function getTicker() {
    ticker.getTicker()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}