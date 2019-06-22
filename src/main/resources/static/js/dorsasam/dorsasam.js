function setActive(id){
    var navigation = document.getElementsByClassName("box_menu");
    var box = document.getElementsByClassName("box");
    var modify = box[0].getElementsByClassName("modify_box");
    var change = box[0].getElementsByClassName("change_box");
    var choices = navigation[0].getElementsByClassName("edit_buttons");
    for(var i = 0;i<choices.length;i++){
        if(id == choices[i].id){
            choices[i].className += " active";
            if(id == "modify"){
                modify[0].className = modify[0].className.replace("fade","appear");
                change[0].className = change[0].className.replace("appear","fade");
            }
            else{
                modify[0].className = modify[0].className.replace("appear","fade");
                change[0].className = change[0].className.replace("fade","appear");
            }
        }
        else{
            choices[i].className = "edit_buttons";
        }
    }

}
function checkEnteries() {
    var box = document.getElementsByClassName("box");
    var profile = box[0].getElementsByClassName("profile_modifications");
    var email = profile[0].getElementsByClassName("email");
    var warn = profile[0].getElementsByClassName("warning");
    if(email[0].value.length > 0){
        if (email[0].value.indexOf("@") > 1 && email[0].value.lastIndexOf(".") > email[0].value.indexOf("@") + 2 && email[0].value.lastIndexOf(".") + 2 < email[0].value.length) {
            warn[0].style.color = "white";
        }
        else{
            warn[0].style.color = "red";
        }
    }
}
function checkPassword(){
    var box = document.getElementsByClassName("change_box");
    var profile = box[0].getElementsByClassName("profile_change");
    var previous = profile[0].getElementsByClassName("previous");
    var newOne = profile[0].getElementsByClassName("new");
    var repeat = profile[0].getElementsByClassName("repeat");
    var warning1 = profile[0].getElementsByClassName("warning1");
    var warning2 = profile[0].getElementsByClassName("warning2");
    var warning3 = profile[0].getElementsByClassName("warning3");
    var warning4 = profile[0].getElementsByClassName("warning4");
    var warning5 = profile[0].getElementsByClassName("warning5");
    if(previous[0].value.length == 0){
        warning1[0].style.color = "red";
    }
    else{
        if(previous[0].value.length < 8){
            warning2[0].style.color = "red";
        }
        else{
            warning1[0].style.color = "white";
            warning2[0].style.color = "white";
        }
    }
    if(newOne[0].value.length < 8){
        warning3[0].style.color = "red";
    }
    else{
        if(newOne[0].value == previous[0].value){
            warning4[0].style.color = "red";
        }
        else{
            warning3[0].style.color = "white";
            warning4[0].style.color = "white";
        }
    }
    if(repeat[0].value != newOne[0].value){
        warning5[0].style.color = "red";
    }
    else{
        warning5[0].style.color = "white";
    }
}