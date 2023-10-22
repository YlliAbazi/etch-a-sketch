const gridContainer = document.querySelector('.gridContainer');
const button = document.querySelector('button');
for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.className = "gridSquare";
    gridContainer.appendChild(gridSquare);

    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = "black";
    })
};