document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const convertBtn = document.getElementById('convert-btn');
    const resultDiv = document.getElementById('result');

    const exchangeRates = {
        'USD': { 'UAH': 38, 'EUR': 0.9, 'USD': 1 },
        'EUR': { 'UAH': 42, 'USD': 1.1, 'EUR': 1 },
        'UAH': { 'USD': 0.026, 'EUR': 0.024, 'UAH': 1 }
    };

    const convertCurrency = () => {
        const amount = parseFloat(amountInput.value) || 0;
        const fromCurrency = fromSelect.value;
        const toCurrency = toSelect.value;

        console.log("amount:", amount);
        console.log("fromCurrency:", fromCurrency);
        console.log("toCurrency:", toCurrency);

        if (amount > 0) {
            const rate = exchangeRates[fromCurrency][toCurrency];
            const result = amount * rate;
            resultDiv.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        } else {
            resultDiv.textContent = "Введіть коректну суму.";
        }
    };

    if (convertBtn) {
        convertBtn.addEventListener('click', convertCurrency);
    } else {
        console.error("Елемент convert-btn не знайдено!");
    }
});