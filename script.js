const containerDiv = document.querySelector('#grid');
function setRandomColors(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);


    return `rgb(${r},${g},${b})`;
}

function setupGrid(size) {
    // dynamically calc itemSize based on 100% of container / # of items
    const itemSizePercentage = `calc(100% / ${size})`; 
    for(let i = 0; i < (size*size); i++){
        const div = document.createElement('div');
        div.classList.add('gridItem');
        
        // sets item's width/height and flex values
        div.style.width = itemSizePercentage;
        div.style.height = itemSizePercentage;
        div.style.flex = `1 0 ${itemSizePercentage}%`;

        // event listeners to change div color on hover
        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = setRandomColors();
            this.style.opacity = (parseFloat(this.style.opacity) || 1) - 0.1;
        });
 
        containerDiv.appendChild(div);
    }
}

// grabs createGridButton and adds event listener to ask user for grid size
const createGridButton = document.querySelector('#create-grid');
createGridButton.addEventListener('click', () => {
    containerDiv.innerHTML = ''; // Clear existing grid
    let gridSize = prompt("Enter new grid size (1-100):");
    gridSize = parseInt(gridSize);
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    setupGrid(gridSize);
});