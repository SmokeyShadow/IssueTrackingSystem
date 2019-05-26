$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    // Animate select box length
    var searchInput = $(".search-box input");
    var inputGroup = $(".search-box .input-group");
    var boxWidth = inputGroup.width();
    searchInput.focus(function(){
        inputGroup.animate({
            width: "300"
        });
    }).blur(function(){
        inputGroup.animate({
            width: boxWidth
        });
    });
});

function changeStatus(id) {
    var component = document.getElementById(id);
    var content  = component.classList;
    if(content.contains("btn-primary"))
    {
        content.replace("btn-primary" , "btn-success")
        component.innerHTML = "فعال"
    }
    else if(content.contains("btn-success"))
    {
        content.replace("btn-success" , "btn-warning")
        component.innerHTML = "غیر فعال"
    }
    else if(content.contains("btn-warning"))
    {
        content.replace("btn-warning" , "btn-success")
        component.innerHTML = "فعال"
    }
}

function deleteUser(id) {
    var component = document.getElementById(id);
    console.log(document.getElementById(100 + id))
    document.getElementById(100 + id).style.display = "none"


}