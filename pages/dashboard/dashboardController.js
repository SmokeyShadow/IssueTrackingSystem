(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$rootScope'];

    function dashboardController($rootScope, $http ) {

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

function onTrClick()
{
    window.location = $(this).data("href");
}
