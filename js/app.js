
var app = angular.module('app', [
    'ngRoute'
]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'landingController',
            templateUrl: baseUrl + 'pages/landing/landing.html',

        })
        .when('/login', {

            controller: 'loginController',
            templateUrl: baseUrl + 'pages/login/login.html',

        })
        .when('/dashboard',
            {
                controller: 'dashboardController',
                templateUrl: baseUrl + 'pages/dashboard/dashboard.html'
            })
        .when('/profile',
            {
                controller: 'profileController',
                templateUrl: baseUrl + 'pages/profile/profile.html'
            })
        .when('/case',
            {
                controller: 'caseController',
                templateUrl: baseUrl + 'pages/CreateCase/case.html'
            })
        .when('/status',
            {
                controller: 'caseStatusController',
                templateUrl: baseUrl + 'pages/casesStatus/caseStatus.html'
            })
        .when('/report',
            {
                controller: 'reportController',
                templateUrl: baseUrl + 'pages/reporting/reporting.html'
            })
        .when('/docase',
            {
                controller: 'doCaseController',
                templateUrl: baseUrl + 'pages/DoCase/doCase.html'
            })
        .when('/authorize',
            {
                controller: 'authorizeController',
                templateUrl: baseUrl + 'pages/userAuthorize/userAuthorize.html'
            })
        .otherwise({
            redirectTo: '/'
        });
});




app.factory('myService', function() {
 var savedData = {}
 function set(data) {
   savedData = data;
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

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


//show & hide element
function ShowLabel(id) {
    var label = document.getElementById(id);
    label.style.visibility = "visible";
}
function HideLabel(id) {
    var label = document.getElementById(id);
    label.style.visibility = "hidden";
}

