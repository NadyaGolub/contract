const elements = document.querySelectorAll('.name');

elements.forEach(element => {
    element.addEventListener('input', () => {
        element.style.width = element.scrollWidth + 'px';
    });
});