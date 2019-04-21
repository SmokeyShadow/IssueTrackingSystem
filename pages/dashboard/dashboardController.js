(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$rootScope'];

    function dashboardController($rootScope, $http) {

        $rootScope.bodylayout = 'main_page_que';

    }

})();

