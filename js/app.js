 
   
// jquery part
$(document).ready(function () {
 
    //register form submit
    $('#register-submit').click(function (){
        var form = $("#register-form").serializeArray();
        let user = {  
            name: form[0].value,
            email: form[1].value, 
            password: form[2].value,
            role: form[4].value,
        };

        let data = JSON.stringify(user);
        //must install npm to dl and save it on PC 
        console.log(data);

    });


    //drop down selector
    $(function () {
        $('select').selectpicker();
    });
    //item gallery with filtering 

    //  default filter(all)
    filterSelection("all");
 
    //auto focus on default filter
    if(document.getElementById("auto-focus") != null)
        document.getElementById("auto-focus").focus();

    //toggle heart color on click
    $(".fa-heart").click(
        function () {
            $(this).toggleClass('heart');
        });

    // split money value 3 by 3 with ,
    var elements = document.getElementsByClassName("money");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = GetMoneyFormat(elements[i]);
    }

    //end item gallery with filtering 


    // switch section

    //switch to register
    $("#switch-to-register").click(function () {
        $("#login-content").animate(
            {
                opacity: '0',
                top: '-100%',
            }
            , function () {
                $("#login-content").css("visibility", "hidden");
                $("#register-content").css("visibility", "visible");
                $("#register-content").animate(
                    {
                        opacity: '1',
                        top: '0%'
                    }
                );
            }

        );

    });

    // switch to login
    $("#switch-to-login").click(function () {
        $("#register-content").animate(
            {
                opacity: '0',
                top: '-100%',
            }
            , function () {
                $("#register-content").css("visibility", "hidden");
                $("#login-content").css("visibility", "visible");
                $("#login-content").animate(
                    {
                        opacity: '1',
                        top: '0%',
                    }
                );
            });
    });

    // end switch section 

    //search section
    //open search bar on searcn-btn click
    $(".search-btn").click(function () {
        $("#search-nav").css("display", "inline-flex");
        $("#list-nav").css("display", "none");
        $("#search-nav").animate(
            {
                width: '100%',
                height: '100%',
            }
        );

    });
    //close search
    $("#close-search").click(function () {
        $("#search-nav").animate({
            width: '0',
            height: '0'
        }, function () {
            $("#search-nav").css("display", "none");
            $("#list-nav").css("display", "flex");
        });
    });

    //end search section


    //side nav section
    //open side nav on line bar click
    $("#linebar").click(function () {
        $("#sidenav").css('display', 'block');
    });
    // close side nav bar
    $("#close-sidenav").click(function () {
        $("#sidenav").css('display', 'none');
    });

    //end side nav section



});


// js parts

// modal page
var modal = document.getElementById('id01');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//end  modal page

//change money format (add , by each 3 characters) function
function GetMoneyFormat(x) {
    var parts = x.innerHTML.split(".");
    var splitcount = 3;
    var counter = 0;
    var result = "";
    var remainIndex = 0;
    if (parts[0].length <= 3) {
        return x.innerHTML;
    }
    for (var i = parts[0].length - 1; i >= 0; i--) {

        if (splitcount === counter) {
            result = "," + parts[0].substring(i + 1, i + splitcount + 1) + result;
            counter = 0;
            remainIndex = i;
        }
        counter++;

    }

    result = parts[0].substring(0, remainIndex + 1) + result;
    if (parts[1] != null)
        result = result + "." + parts[1];
    return result;
}


//input validations
function ValidateUser() {

    var username = document.forms["loginform"]["username"];
    var userval = username.value;
    var errordiv = document.getElementById("nameerror-div");
    if (userval == "") {

        errordiv.style.visibility = "visible";
        username.style.border = "2px solid #c23321";
        document.getElementById("nameerror").innerHTML = "نام کاربری نمی تواند خالی باشد";
    }
    else {
        username.style.border = "2px solid rgb(66, 146, 74)";
        errordiv.style.visibility = "hidden";
    }


}

function ValidateEmail(emailID, errordiv, errorcontent) {
    var email = document.getElementById(emailID);
    var emailVal = email.value;
    var pattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    var error = document.getElementById(errordiv);
    var errormessage = document.getElementById(errorcontent);
    if (emailVal == "") {
        error.style.visibility = "visible";
        email.style.border = "2px solid #c23321";
        errormessage.innerHTML = "ایمیل نمی تواند خالی باشد";
    }
    else if (!pattern.test(emailVal)) {
        error.style.visibility = "visible";
        email.style.border = "2px solid #c23321";
        errormessage.innerHTML = "فرمت ایمیل صحیح نیست";
    }
    else {
        email.style.border = "2px solid rgb(66, 146, 74)";
        error.style.visibility = "hidden";
    }

}

function ValidatePass(passID, passerrordiv, errorcontent) {

    var pass = document.getElementById(passID);
    var pattern = /(?=.*\d)(?=.*[a-z]).{8,}/igm;
    var errordiv = document.getElementById(passerrordiv);
    var errormsg = document.getElementById(errorcontent);
    if (pass.value == "") {
        errordiv.style.visibility = "visible";
        pass.style.border = "2px solid #c23321";
        errormsg.innerHTML = "رمز عبور نمی تواند خالی باشد";
    }
    else if (!pattern.test(pass.value)) {
        errordiv.style.visibility = "visible";
        pass.style.border = "2px solid #c23321";
        errormsg.innerHTML = "حداقل ۸ کاراکتر و شامل یک حرف و یک رقم باشد";
    }
    else {
        pass.style.border = "2px solid rgb(66, 146, 74)";
        errordiv.style.visibility = "hidden";
    }

}
function ValidateRepass() {
    var pass = document.forms["loginform"]["password"].value;
    var repass = document.forms["loginform"]["repassword"].value;
    var errordiv = document.getElementById("repasserror-div");

    if (repass == "") {
        errordiv.style.visibility = "visible";
        document.forms["loginform"]["repassword"].style.border = "2px solid #c23321";
        document.getElementById("repasserror").innerHTML = "رمز عبور نمی تواند خالی باشد";
    }
    else if (repass != pass) {
        errordiv.style.visibility = "visible";
        document.forms["loginform"]["repassword"].style.border = "2px solid #c23321";
        document.getElementById("repasserror").innerHTML = "باید با رمز عبور یکی باشد";
    }
    else {
        document.forms["loginform"]["repassword"].style.border = "2px solid rgb(66, 146, 74)";
        errordiv.style.visibility = "hidden";
    }

}

//item gallery section
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("item");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

//show & hide element
function ShowLabel(id) {
    var label = document.getElementById(id);
    label.style.visibility = "visible";
}
function HideLabel(id) {
    var label = document.getElementById(id);
    label.style.visibility = "hidden";
}

