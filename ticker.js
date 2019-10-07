class Ticker {
    constructor(base, target) {
        this.base = base;
        this.target = target;
    }

    // Fetch ticker from API
    async getTicker() {
        const response = await fetch(`https://api.cryptonator.com/api/ticker/${this.base}-${this.target}`);

        const responseData = await response.json();

        return responseData.ticker;
    }

    // Change curencies
    changeCurrencies(base, target) {
        this.base = base;
        this.target = target;
    }
}