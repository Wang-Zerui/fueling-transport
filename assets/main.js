const $ = (e) => document.getElementById(e);
const q = (e) => document.querySelector(e);

document.body.addEventListener('mousedown', function() {
    document.body.classList.add('using-mouse');
});

// Re-enable focus styling when Tab is pressed
document.body.addEventListener('keydown', function(event) {
    if (event.keyCode === 9) {
        document.body.classList.remove('using-mouse');
    }
});
