var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     var background = document.getElementsByTagName("body")[0];
//     if (background.style.background === "purple") {
//         background.style.background = "white";
//     } else {
//         background.style.background = "purple";
//     }
//     })

// much simpler version of above
button.addEventListener("click", function() {
    document.body.classList.toggle("clicked");
})