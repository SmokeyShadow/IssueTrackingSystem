(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('caseController', caseController);

    caseController.$inject = ['$rootScope'];

    function caseController($rootScope, $http) {

        $rootScope.bodylayout = 'main_page_que';
        getDate();
    }

    app.controller('dashboardCtrl', function ($scope, $window, myService) {
        var user = myService.get();
        $scope.name = user.user;
        if (user.role.trim() != 'admin') {
            $scope.adminAccess = 'hidden';
        }


    });

})();

function getDate() {
    var today = new Date();
    document.getElementById("today").value = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

}
