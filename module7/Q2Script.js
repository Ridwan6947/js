const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (item.style.backgroundColor === 'red') {
            item.style.backgroundColor = '';
        } else {
            item.style.backgroundColor = 'red';
        }
    }
    );
});
