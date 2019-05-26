(function () {
    'use strict';
    var data;
    var app = angular.module('app');
    app.run(function ($http) {
        var url = "http://localhost:8080/IE-proj/Assets/Jsons/users.json";
        $http.get(url).then(successCallback, errorCallback);

        function successCallback(response) {
            //success code
            console.log("success" + response.data);
            data = response.data;
        }

        function errorCallback(error) {
            //error code
            console.log("error" + response.error);
        }

    })

    app.controller('authorizeController', authorizeController);

    authorizeController.$inject = ['$rootScope'];

    function authorizeController($rootScope, $http, $window) {

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



