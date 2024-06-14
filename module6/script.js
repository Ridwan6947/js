document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');

    let numColumns = 0;
    const firstRowItem = gridItems[0];
    let currentItem = firstRowItem;
    
    while (currentItem) {
        numColumns++;
        currentItem = currentItem.nextElementSibling;

        if (currentItem && currentItem.offsetTop > firstRowItem.offsetTop) {
            break;
        }
    }

    const numRows = Math.ceil(gridItems.length / numColumns);

    console.log('Number of columns:', numColumns);
    console.log('Number of rows:', numRows);

    gridItems.forEach((item, index) => {
        if ((index % numColumns) === 1) { 
            item.addEventListener('click', () => {
                item.style.backgroundColor = 'red';  
            });
        }
    });
});
