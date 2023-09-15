document.getElementById('simulateButton').addEventListener('click', function() {
    const diceFaces = parseInt(document.getElementById('diceFaces').value) || 6;
    const rollTimes = parseInt(document.getElementById('rollTimes').value) || 1000;
    
    let diceMap = new Map();

    for (let i = 1; i <= rollTimes; i++) {
        let outCome = Math.floor(Math.random() * diceFaces) + 1;

        if (diceMap.has(outCome)) {
            diceMap.set(outCome, diceMap.get(outCome) + 1);
        } else {
            diceMap.set(outCome, 1);
        }
    }

    const resultsTable = document.getElementById('resultsTable');
    resultsTable.innerHTML = '';

    for (let [key, value] of diceMap.entries()) {
        const row = document.createElement('tr');
        const faceCell = document.createElement('td');
        const frequencyCell = document.createElement('td');

        faceCell.textContent = key;
        frequencyCell.textContent = value;

        row.appendChild(faceCell);
        row.appendChild(frequencyCell);
        resultsTable.appendChild(row);
    }
});

