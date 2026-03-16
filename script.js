const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.menu-card');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Ativar botão clicado
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        cards.forEach(card => {
            if (filter === 'all' || card.classList.contains('category-' + filter)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});