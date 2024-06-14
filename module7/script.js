
    let input = document.getElementById('input');
    let saveBtn = document.getElementById('saveBtn');

    function saveText() {
        let text = input.value;
        localStorage.setItem('text', text);
        console.log('Text saved');
    }

    window.addEventListener('beforeunload', (event)=> {
        let savedText = localStorage.getItem('text');
        if (input.value !== savedText) {
            event.preventDefault();
            return 'You have unsaved changes. Are you sure you want to leave?';
        }
    });

