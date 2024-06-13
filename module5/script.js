
function captureEventHandler(event) {
    console.log('Capture phase event listener triggered.');
    alert('Capture phase event listener triggered.');
}

function bubbleEventHandler(event) {
    console.log('Bubbling phase event listener triggered.');
    alert('Bubbling phase event listener triggered.');
}

const container = document.getElementById('container');
const child = document.getElementById('child');

container.addEventListener('click', captureEventHandler, true);
child.addEventListener('click', captureEventHandler, true);
container.addEventListener('click', bubbleEventHandler, true);
child.addEventListener('click', bubbleEventHandler, true); 