// Init Ticker object
const ticker = new Ticker('BTC', 'EUR');
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getTicker);


function getTicker() {
    ticker.getTicker()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}