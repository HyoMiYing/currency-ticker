class Storage {
    constructor() {
        this.base;
        this.target;
        this.defaultBase = 'BTC';
        this.defaultTarget = 'EUR';
    }

    getStoredTicker() {
        if(localStorage.getItem('base') === null) {
            this.base = this.defaultBase;
        } else {
            this.base = localStorage.getItem('base');
        }

        if(localStorage.getItem('target') === null) {
            this.target = this.defaultTarget;
        } else {
            this.target = localStorage.getItem('target');
        }

        return {
            base: this.base,
            target: this.target
        }
    }

    setTicker(base, target) {
        localStorage.setItem('base', base);
        localStorage.setItem('target', target);
    }
}