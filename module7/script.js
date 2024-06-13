let originalText = '';

    const inputField = document.getElementById('input');
    originalText = inputField.value;

    inputField.addEventListener('input', function() {
        const newText = inputField.value;
        if (newText !== originalText) {
            window.onbeforeunload = function() {
                return true;
            };
        } else {
            window.onbeforeunload = null;
        }
    });
    window.saveText = function() {
        originalText = inputField.value;
        window.onbeforeunload = null;
        console.log(originalText);
        alert('Data saved!');
    };


