var nrOfRows = prompt("How many rows and columns should the grid contain ?");

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