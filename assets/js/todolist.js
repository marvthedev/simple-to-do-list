//Check off completed ToDos
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
})

//Click on X to delete a ToDo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})
//create a ToDO
$("input[type=text]").keypress(function (event) {
    if(event.which === 13) {
        var todoText = $(this).val();
        //create a new li and add to ul from todoText variable
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
    
});

$(".fa-check-double").click(function() {
    $("input[type=text]").fadeToggle();

})