var nrOfRows = document.getElementById("grid-size").defaultValue;

function createGrid(x){

    var dimension = 640/x;
    for(var rows=0; rows < x; rows++){
        for(var col=0; col < x; col++){
            var newDiv = document.createElement("div");
            newDiv.className = "grid";
            newDiv.style.width = `${dimension}px`;
            newDiv.style.height = `${dimension}px`;
            newDiv.addEventListener("mouseover",colorTheGrid);
            document.getElementById("container").append(newDiv);
        };
    };
}

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

function generateNewGrid(){
    var newGridButton = document.getElementById("submit");
    newGridButton.addEventListener("click", newGrid);
}


var mode = "color";

var modes = document.querySelector(".modes").children;
for(i=0; i<=2; i++){
    modes[i].addEventListener("click", function(event){
        mode = event.target.textContent;
    });
}

function colorTheGrid(e){
    if(mode !== "Skittles mode" && mode !== "Eraser"){
        e.target.style.backgroundColor = document.querySelector("#color-picker").value;
    } else if(mode === "Skittles mode") {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if(mode === "Eraser"){
        e.target.style.backgroundColor = "#FFFFFF";
    }

}


function cleanCanvas(){
    clearGrid();
    newGrid();
}


function etchASketch(){
    createGrid(nrOfRows);
    generateNewGrid();
    var clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click", cleanCanvas);
}

etchASketch();