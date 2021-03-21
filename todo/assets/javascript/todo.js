//checking off items
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
})

//deleting items
$("ul").on("click", ".delete", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
    e.stopPropagation();
})

//adding new items
$("input[type='text']").on("keypress", function(e) {
    var key = e.which;
    if (key === 13) {
        var newItem = "<li> <span class='delete'><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>" 
        $("ul").append(newItem);
        $(this).val("")
    }
})

//show/hide input
$("#show").on("click", function() {
    $("input").fadeToggle(500);
})