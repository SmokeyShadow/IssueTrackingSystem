(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('manageController', manageController);

    manageController.$inject = ['$rootScope'];

    function manageController($rootScope, $http) {

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
