var nrOfRows = document.getElementById("grid-size").defaultValue;

function createGrid(x){

    var dimension = 640/x;
    for(var rows=0; rows < x; rows++){
        for(var col=0; col < x; col++){
            var newDiv = document.createElement("div");
            newDiv.className = "grid";
            newDiv.style.width = `${dimension}px`;
            newDiv.style.height = `${dimension}px`;
            document.getElementById("container").append(newDiv);
        };
    };
}

createGrid(nrOfRows);

function clearGrid(){
    var oldGrid = document.querySelectorAll(".grid");
    oldGrid.forEach(element => {
        element.remove();
    });
}

function newGrid(){
    var newNrOfRows = document.getElementById("grid-size").value; 
    if(newNrOfRows>100){
        alert("No dimensions above 100x100 is allowed!");
    } else {
        clearGrid(); 
        createGrid(newNrOfRows);
    }
}

var newGridButton = document.getElementById("submit");
newGridButton.addEventListener("click", newGrid);
