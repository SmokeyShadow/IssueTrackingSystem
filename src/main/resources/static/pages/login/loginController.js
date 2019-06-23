(function () {
    'use strict';
    var app = angular.module('app');

    app.controller('loginController', loginController);

    loginController.$inject = ['$rootScope'];

    function loginController($rootScope, $http, $window) {

        $rootScope.bodylayout = 'main_page_que';

    }
    app.controller('loginCtrl', function ($scope, $window , $http , myService) {

        $scope.logIn = function () {

            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
            var jsondata = {
                "email" : $scope.email,
                "pass" : $scope.password
            };
            var url = "rest/auth/login";
            $http.post(url , jsondata ,config ).then(successCallback, errorCallback);


            function successCallback(response) {
                if( response.status == 200 && response.data.success == true) {
                    //success code
                    var data = response.data.data;
                    console.log("data" + data['name'] + data['pass'] + data['role'] + data['email'] );
                    var username =data['name'];
                    var pass = data['pass'];
                    var role = data['role'];
                    var email = data['email'];
                    var id = data['id'];
                    var person = {id: id ,user: username, password: pass, role: role, email: email};
                    myService.set(person);
                    $window.location.href = "/#!" + "/dashboard";
                    return;
                }
                else
                {
                    $scope.rgmsg = response.data.message;
                    $scope.usermodal = "true";
                }

            }
            function errorCallback(error) {
                //error coder
                $scope.rgmsg = error.data.message;
                $scope.usermodal = "true";
            }


        }

    });






})();
function switchBetweenElems(from, to) {
    var fromElem = document.getElementById(from);
    var toElem = document.getElementById(to);
    var pos = 0;
    var opacCounter = 1;
    var opacity = 0;
    var id = setInterval(frame, 2);
    function frame() {
        if (pos == -100 || opacCounter == 0) {
            toElem.style.visibility = "hidden";
        }
        else {
            if (pos == -120) {
                fromElem.style.top = '0%';
                fromElem.style.visibility = "visible";
            }
            if (pos >= -100) {
                toElem.style.top = pos + '%';
                toElem.style.opacity = opacCounter;
            }
        }

        if (fromElem.style.opacity >= 1) {
            clearInterval(id);
        }
        else if (pos < -120) {
            fromElem.style.opacity = opacity;
        }
        pos--;
        opacity += 0.005;
        opacCounter = opacCounter - 0.01;

    }
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
        return false;
    }
    else if (!pattern.test(emailVal)) {
        error.style.visibility = "visible";
        email.style.border = "2px solid #c23321";
        errormessage.innerHTML = "فرمت ایمیل صحیح نیست";
        return false;
    }
    else {
        email.style.border = "2px solid rgb(66, 146, 74)";
        error.style.visibility = "hidden";
        return true;
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
        return true;
    }
    return false;

}
function submitUser() {

    var obj = {
        name:document.getElementById('login-user').value,
        email:document.getElementById('registeremail').value,
        pass:document.getElementById('registerpass').value,
        repass:document.getElementById('login-repass').value,
        role:document.getElementById('user-role').value

    };
    var sentJSON = JSON.stringify(obj);
    const Http = new XMLHttpRequest();
    const url='rest/auth/register';
    Http.open("POST", url, true);

    Http.setRequestHeader("Content-type", "application/json");
    Http.send(sentJSON)
    Http.onreadystatechange = function ()  {
        if(this.readyState == 4 && this.status == 200)
        {
            var json = JSON.parse(this.responseText);
            document.getElementById('register-msg').innerHTML = json.message;
            document.getElementById('user-modal').style.display = "block";

        }

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

