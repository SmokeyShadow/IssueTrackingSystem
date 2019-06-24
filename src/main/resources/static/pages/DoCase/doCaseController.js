(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('doCaseController', doCaseController);

    doCaseController.$inject = ['$rootScope'];

    function doCaseController($rootScope, $http) {

        $rootScope.bodylayout = 'main_page_que';

    }
    app.controller('welcomeCtrl', function ($scope, $window ,myService) {
        //get user info from login

        var user = myService.get();
        $scope.name = user.user ;

    });

    app.controller('adminCtrl', function ($scope, $window ,myService) {
        var user = myService.get();

        if(user.role.trim() != 'مدیر')
        {
            $scope.adminAccess = 'hidden';
        }
    });
})();
