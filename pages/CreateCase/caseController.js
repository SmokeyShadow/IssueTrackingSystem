(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('caseController', caseController);

    caseController.$inject = ['$rootScope'];

    function caseController($rootScope, $http ) {

        $rootScope.bodylayout = 'main_page_que';

    }
    
    app.controller('dashboardCtrl', function ($scope, $window ,myService) {
		var user = myService.get();
        $scope.name = user.user ;
        if(user.role.trim() != 'admin')
        {
            $scope.adminAccess = 'hidden';
        }
   

    });

})();

function chooseFunc(id){
    var list = document.getElementById("list-one");
    var dropdown = list.getElementsByClassName("dropdown");
    var button = dropdown[0].getElementsByClassName("btn btn-primary dropdown-toggle");
    if(id == "complaint"){
        button[0].textContent = "شکایت";
    }
    else if(id == "critic"){
        button[0].textContent = "انتقاد";
    }
    else if(id == "suggestion"){

        button[0].textContent = "پیشنهاد";
    }
    else if(id == "purpose"){
        button[0].textContent = "درخواست";
    }

}
function chooseFunc2(id){
    var list = document.getElementById("list-two");
    var dropdown = list.getElementsByClassName("dropdown");
    var button = dropdown[0].getElementsByClassName("btn btn-primary dropdown-toggle");
    if(id == "common"){
        button[0].textContent = "معمولی";
    }
    else if(id == "normal"){
        button[0].textContent = "متوسط";
    }
    else if(id == "urgent"){

        button[0].textContent = "اورژانسی";
    }

}