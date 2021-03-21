var p1_score = 0;
var p2_score = 0;
var scoreLimit = 5;

var p1_display = document.getElementById("p1_display");
var p2_display = document.getElementById("p2_display");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var input = document.querySelector("input");
var limitDisplay = document.getElementById("limitDisplay");

p1.addEventListener("click", function() {
    if (!isGameOver()) {
        p1_score++;
        p1_display.textContent = p1_score;
        if (p1_score === scoreLimit) {
            p1_display.classList.add("won");
        }
    }
})
p2.addEventListener("click", function() {
    if (!isGameOver()) {
        p2_score++;
        p2_display.textContent = p2_score;
        if (p2_score === scoreLimit) {
            p2_display.classList.add("won");
        }
    }
})
reset.addEventListener("click", function() {
    p1_score = 0;
    p2_score = 0;
    p1_display.textContent = p1_score;
    p2_display.textContent = p2_score;
    p1_display.classList.remove("won");
    p2_display.classList.remove("won");
})
input.addEventListener("change", function() {
    scoreLimit = Number(this.value);
    limitDisplay.textContent = scoreLimit;
})

function isGameOver() {
    if (p1_score >= scoreLimit || p2_score >= scoreLimit) {
        return true;
    }
    return false;
}
