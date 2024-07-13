
function calculationVolume() {
    const deposit = +document.getElementById('deposit').value;
    const risk = +document.querySelector('.form-check-input:checked').value;
    const stop = +document.getElementById('stop').value;

    let result = (deposit * risk) / stop;
    setInfo(result);
}

function setInfo(result) {
    document.getElementById('volume-position').innerHTML = `Объем позиции: ${Number(result.toFixed(0))} USDT`;
    // addElemToHistory(result)
}

function clearVolume() {
    document.getElementById('deposit').value = ''
    document.getElementById('risk_1').checked = true;
    document.getElementById('stop').value = '';
    document.getElementById('volume-position').innerHTML = '';
}

function calculationStopLoss() {
    const price_entry = +document.getElementById('price-entry').value;
    const price_stop = +document.getElementById('price-stop').value;
    let result

    if (price_entry > price_stop) {
        result = 100 - ((price_stop * 100) / price_entry);
    }
    if (price_entry < price_stop) {
        result = 100 - ((price_entry * 100) / price_stop);
    }
    
    setStop(result);
}

function setStop(result) {
    document.getElementById('stop').value= Number(result.toFixed(1));
}

function clearStopLoss() {
    document.getElementById('price-entry').value = ''
    document.getElementById('price-stop').value = '';
}
