(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('manageController', manageController);

    manageController.$inject = ['$rootScope'];

    function manageController($rootScope, $http) {

        $rootScope.bodylayout = 'main_page_que';

    }
    app.controller('dashboardCtrl', function ($scope, $window, myService) {
        var user = myService.get();
        $scope.name = user.user;
        if (user.role != 'admin') {
            $scope.adminAccess = 'hidden';
        }


    });

})();
