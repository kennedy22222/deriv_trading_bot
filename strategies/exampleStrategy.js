// exampleStrategy.js

const settings = require('../config/settings.json');

let bankroll = settings.initial_bankroll;
let maxLosses = settings.max_losses;
let losses = 0;

function placeTrade() {
    // Implement your trading logic here
    const tradeAmount = bankroll * settings.risk_percentage;

    // Simulated trade result
    const tradeResult = Math.random() > 0.5; // Randomly win or lose

    if (tradeResult) {
        bankroll += tradeAmount; // Win
        losses = 0; // Reset losses
        console.log(`Trade won! New bankroll: ${bankroll}`);
    } else {
        bankroll -= tradeAmount; // Lose
        losses++;
        console.log(`Trade lost! New bankroll: ${bankroll}`);
    }

    // Check if max losses reached
    if (losses >= maxLosses) {
        console.log(`Maximum losses reached (${maxLosses}). Stopping trading.`);
        return false; // Stop trading
    }

    return true; // Continue trading
}

function runBot() {
    let tradingActive = true;

    while (tradingActive) {
        tradingActive = placeTrade();
    }

    console.log("Trading session ended.");
}

runBot();
