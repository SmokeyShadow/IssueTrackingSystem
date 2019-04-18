(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('loginController', loginController);
    
        loginController.$inject = [ '$rootScope'];
    function loginController($rootScope) {
    
        $rootScope.bodylayout ='main_page_que';
    }
    })();


// jquery part
$(document).ready(function () {


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




});
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

