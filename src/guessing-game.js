class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.currentGuess = Math.round((this.max - this.min) / 2) + this.min;
        return this.currentGuess;
    }

    lower() {
        this.max = this.currentGuess;
    }

    greater() {
        this.min = this.currentGuess;
    }
}

module.exports = GuessingGame;
