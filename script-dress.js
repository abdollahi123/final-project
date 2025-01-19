function applyFilter() {
    document.getElementById('successModal').style.display = 'block';
    setTimeout(function() {
        document.getElementById('successModal').style.display = 'none';
    }, 3000);
}

document.querySelector('#price-range').addEventListener('input', function() {
    var value = this.value;
    document.querySelector('.price-range span:nth-child(1)').textContent = value + ' تومان';
});

document.querySelector('.view-more').addEventListener('click', function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.style.display = 'block';
    });
});