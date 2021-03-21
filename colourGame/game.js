//initialise variable
var numColours = 6;
var colours = generateColourArray(numColours)
var backgroundColour = "#232323";
var goalColour = pickColour(colours);

//selections
var goalColourSel = document.getElementById("goalColour");
goalColourSel.textContent = goalColour.toUpperCase();
var squares = document.querySelectorAll(".square");
var feedbackSel = document.querySelector("#feedback");
var h1Sel = document.querySelector("h1");
var refreshSel = document.getElementById("refresh");
var easySel = document.getElementById("easy");
var hardSel = document.getElementById("hard");

//initialisation of all squares
for (var i = 0; i < squares.length; i++) {
    //adding starting colours
    squares[i].style.backgroundColor = colours[i];
    //adding click listener
    squares[i].addEventListener("click", function() {
        if (checkColour(this, goalColour)) {
            feedbackSel.textContent = "Winner";
            changeSquareColours(squares, goalColour);
            h1Sel.style.backgroundColor = goalColour;
            refreshSel.textContent = "Play Again"
        }
        else {
            fade(this, backgroundColour);
            feedbackSel.textContent = "Try Again";
        }
    })
}
refreshSel.addEventListener("click", refresh);
easySel.addEventListener("click", function() {
    this.classList.add("selected");
    hardSel.classList.remove("selected");
    numColours = 3;
    refresh(numColours);
})
hardSel.addEventListener("click", function() {
    this.classList.add("selected");
    easySel.classList.remove("selected");
    numColours = 6
    refresh(numColours);
})

//functions
function checkColour(square, goal) {
    if (square.style.backgroundColor === goal) {
        return true;
    }
    return false;
}
function fade(square, background) {
    square.style.backgroundColor = background;
}
function changeSquareColours(squareList, colour) {
    for (var i = 0; i < squareList.length; i++) {
        squareList[i].style.backgroundColor = colour;
    }
}
function pickColour(colours) {
    //given an array of colours, returns a random one
    var rand = Math.floor(Math.random()*colours.length);
    return colours[rand];
}
function generateColourArray(num) {
    //generates an array of num random colours
    var colourArray = []
    for (var i = 0; i < num; i++) {
        var red = (Math.floor(Math.random()*256)).toString(); //gets a random value from 0-255
        var green = (Math.floor(Math.random()*256)).toString(); //gets a random value from 0-255
        var blue = (Math.floor(Math.random()*256)).toString(); //gets a random value from 0-255
        colourArray.push(`rgb(${red}, ${green}, ${blue})`);
    }
    return colourArray;
}
function refresh() {
    colours = generateColourArray(numColours);
    goalColour = pickColour(colours);
    goalColourSel.textContent = goalColour.toUpperCase();
    for (var i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.backgroundColor = colours[i];
            squares[i].style.display = "block";
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1Sel.style.backgroundColor = "steelblue";
    refreshSel.textContent = "New Colours";
    feedbackSel.textContent = "";
}
