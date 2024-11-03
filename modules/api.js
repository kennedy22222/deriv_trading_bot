const axios = require('axios'); // Assuming you're using axios for HTTP requests

const API_URL = 'https://api.deriv.com'; // Example API endpoint

async function getMarketData(symbol) {
    try {
        const response = await axios.get(`${API_URL}/market/${symbol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching market data:', error);
    }
}

module.exports = { getMarketData };
