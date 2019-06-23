(function () {
    'use strict';
    var app = angular.module('app');
    var data;

    app.run(function ($http) {
        var url = "http://localhost:8080/IE-proj/Assets/Jsons/assignees.json";
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


    app.controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$rootScope'];

    function dashboardController($rootScope, $http ) {

        $rootScope.bodylayout = 'main_page_que';

    }
    
    app.controller('dashCtrl', function ($scope, $window ,myService) {
        //get user info from login

        var user = myService.get();
        console.log("service user" + user.user);
        $scope.name = user.user ;




    });
    app.controller('adminCtrl', function ($scope, $window ,myService) {
        var user = myService.get();

        if(user.role.trim() != 'مدیر')
        {
            $scope.adminAccess = 'hidden';
        }
    });
    app.controller('assigneeCtrl', function ($scope ,myService) {

        var user = myService.get();
        var filterdata = data;
        var count =0;
        if(user.role.trim()  != 'مدیر')
        {

            for (var i in data) {
                if(data[i].email == user.email)
                {
                    filterdata[count++] = data[i];
                }
            }
            filterdata.length = count;
            $scope.assignee = filterdata;
        }
        else
            $scope.assignee = data;
    });

})();

