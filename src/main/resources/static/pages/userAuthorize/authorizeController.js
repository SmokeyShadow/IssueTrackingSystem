(function () {
    'use strict';
    var data;
    var app = angular.module('app');

    app.controller('authorizeController', authorizeController);

    authorizeController.$inject = ['$rootScope'];

    function authorizeController($rootScope, $http, $window) {

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







