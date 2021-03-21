window.setTimeout(function() {
    // put all of your JS code from the lecture here
    alert("Welcome to your todo app");
    var todos = [];
    var request = prompt("what would you like to do");
    while (request !== "quit") {
        if (request === "list") {
            console.log("*************");
            todos.forEach(function(item, index, list) {
                console.log(index + ": " + item);
            })
            console.log("*************");
        }
        else if (request === "new") {
            var newItem = prompt("please add your new item");
            todos.push(newItem);
            console.log(newItem + " has been added to the list.")
        }
        else if (request === "delete") {
            var index = prompt("what index would you like to remove?");
            todos.splice(index, 1);
            console.log("item has been deleted.")
        }
        request = prompt("what would you like to do");
    }
    console.log("Goodbye :)");
}, 500);