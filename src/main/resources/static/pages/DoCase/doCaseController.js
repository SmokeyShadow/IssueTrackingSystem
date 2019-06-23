(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('doCaseController', doCaseController);

    doCaseController.$inject = ['$rootScope'];

    function doCaseController($rootScope, $http) {

        $rootScope.bodylayout = 'main_page_que';

    }

    app.controller('adminCtrl', function ($scope, $window ,myService) {
        var user = myService.get();

        if(user.role.trim() != 'مدیر')
        {
            $scope.adminAccess = 'hidden';
        }
    });
})();
