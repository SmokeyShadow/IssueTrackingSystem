(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('doCaseController', doCaseController);

    doCaseController.$inject = ['$rootScope'];

    function doCaseController($rootScope, $http) {

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
