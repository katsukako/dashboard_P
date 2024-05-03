document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', calculateTotal);
});

function calculateTotal() {
    let totalScore = 0;
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkedBox => {
        totalScore += parseInt(checkedBox.dataset.score, 10);
    });
    document.getElementById('totalScore').textContent = totalScore;
}
