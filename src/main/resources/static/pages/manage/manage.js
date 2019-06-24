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

function changeStatus(id,userID) {
    const Http = new XMLHttpRequest();
    var component = document.getElementById(id);
    var content  = component.classList;
    if(content.contains("btn-primary"))
    {
        content.replace("btn-primary" , "btn-success");
        component.innerHTML = "فعال";
        const url ='rest/manage/verify/'+userID;
        Http.open("POST", url , false);
    }
    else if(content.contains("btn-success"))
    {
        content.replace("btn-success" , "btn-warning");
        component.innerHTML = "غیر فعال";
        const url ='rest/manage/inactive/'+userID;
        Http.open("POST", url , false);
    }
    else if(content.contains("btn-warning"))
    {
        content.replace("btn-warning" , "btn-success");
        component.innerHTML = "فعال";
        const url ='rest/manage/active/'+userID;
        Http.open("POST", url , false);
    }

    Http.setRequestHeader("Content-type", "application/json");
    Http.send();
    if(Http.status == 200 && Http.readyState == 4){

    }
}

function deleteUser(id,userID) {
    const Http2 = new XMLHttpRequest();
    const url2='rest/manage/eliminate/'+userID;
    Http2.open("POST", url2 , false);
    Http2.setRequestHeader("Content-type", "application/json");
    Http2.send();
    if(Http2.status == 200 && Http2.readyState == 4){
        document.getElementsByClassName("trRow")[id].style.display = "none";
    }
}

function viewProfile(id) {
    const Http = new XMLHttpRequest();
    const url='rest/manage/profile/'+id;
    Http.open("GET", url , false);
    Http.send();
        if(Http.readyState == 4 && Http.status == 200)
        {
            var json = JSON.parse(Http.responseText);
            document.getElementById('casesubmit-msg').innerHTML = json.message;
            document.getElementById('case-modal').style.display = "block";

        }
}