
var app = angular.module('app', [
    'ngRoute'
]);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
            controller: 'landingController',
            templateUrl: baseUrl + 'pages/landing/landing.html',
        
		})
		.when('/login', {
    
            controller: 'loginController',
            templateUrl: baseUrl + 'pages/login/login.html',

		})
		.otherwise({
			redirectTo: '/'
		});
});
   



// js parts

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

