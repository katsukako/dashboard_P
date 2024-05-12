let lastCheckedRadio = null;

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', () => {
        if (radio === lastCheckedRadio) {
            radio.checked = false;
            lastCheckedRadio = null;
        } else {
            lastCheckedRadio = radio;
        }
        calculateTotal();
    });
});

function calculateTotal() {
    let totalScore = 0;
    document.querySelectorAll('input[type="radio"]:checked').forEach(checkedRadio => {
        totalScore += parseInt(checkedRadio.dataset.score, 10);
    });
    document.getElementById('totalScore').textContent = totalScore;
}
