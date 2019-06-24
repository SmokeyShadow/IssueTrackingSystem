(function () {
    'use strict';
    var data;
    var app = angular.module('app');

    app.controller('authorizeController', authorizeController);

    authorizeController.$inject = ['$rootScope'];

    function authorizeController($rootScope, $http, $window) {

        $rootScope.bodylayout = 'main_page_que';

    }



    app.controller('dashboardCtrl', function ($scope, $window, myService) {
        var user = myService.get();
        $scope.name = user.user;
        if (user.role.trim() != 'admin') {
            $scope.adminAccess = 'hidden';
        }

    });
})();







