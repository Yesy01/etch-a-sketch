const container = document.querySelector('.container');
const resizeButton = document.getElementById('resize-button');

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    container.innerHTML = '';
    const squareSize = 640 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.opacity = 0.05;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomRGB();
            let currentOpacity = parseFloat(square.style.opacity);
            if (currentOpacity < 1) {
                square.style.opacity = (currentOpacity + 0.1).toString();
            }
        });

        container.appendChild(square);
    }
}

resizeButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter the number of squares per side (max 100):'));
    if (isNaN(newSize) || newSize < 2 || newSize > 100) {
        alert('Please enter a number between 2 and 100.');
        return;
    }
    createGrid(newSize);
});

createGrid(16);
