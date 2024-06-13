const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((item, index) => {
        if ((index + 1) % 3 === 2) {
            item.addEventListener('click', () => {
                item.style.backgroundColor = 'red';
            });
        }
    });


