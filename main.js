const gridContainer = document.querySelector('.gridContainer');
const promptBtn = document.querySelector('.promptBtn');
const oneColorBtn = document.querySelector('.oneColorBtn');
const rainbowColorBtn = document.querySelector('.rainbowColorBtn');

let monoColor = true;

drawGridSquares(16);

function clearGrid () {
    gridContainer.innerHTML = '';
}

function randomColor () {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${b}, ${g})`;
}

function drawGridSquares (sqPerRow) {

    clearGrid();

    const sqDims = 600 / sqPerRow;
    const sqNumber = sqPerRow * sqPerRow;

    for (let i = 0; i < sqNumber; i++) {
        const gridSquare = document.createElement('div');

        gridSquare.style.width = `${sqDims}px`;
        gridSquare.style.height = `${sqDims}px`;

        gridContainer.appendChild(gridSquare);

        gridSquare.addEventListener('mouseover', () => {
            monoColor ? gridSquare.style.backgroundColor = 'black' : gridSquare.style.backgroundColor = randomColor();
        });
    }
}
   
promptBtn.addEventListener('click', () => {
    let numberEntered = prompt("Enter the number of square per row (< 100): ");

    numberEntered ? drawGridSquares(numberEntered) : undefined;
})

oneColorBtn.addEventListener('click',  () => {   
    monoColor = true;
});

rainbowColorBtn.addEventListener('click', () => {
    monoColor = false;
});