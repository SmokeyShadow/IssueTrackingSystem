(function () {
    'use strict';
    var app = angular.module('app');


    app.controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$rootScope'];

    function dashboardController($rootScope, $http ) {

        $rootScope.bodylayout = 'main_page_que';

    }
    
    app.controller('welcomeCtrl', function ($scope, $window ,myService) {
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
    app.controller('assigneeCtrl', function ($scope ,$http , myService) {

            $scope.init = function () {
                var user = myService.get();
                var config = {
                    headers : {
                        'Content-Type': 'application/json'
                    }
                }
                var jsondata = {
                    "id" : user.id,
                    "role" : user.role,
                    "name" : user.user
                };
                var url = "rest/case/assignees";
                $http.post(url , jsondata ,config ).then(successCallback, errorCallback);

                console.log(jsondata );
                function successCallback(response) {
                    if( response.status == 200 && response.data.success == true
                    && response.data.data != null) {
                        $scope.assignee = response.data.data;
                        console.log("success ! contains data" );
                    }
                    else
                        console.log("no records found" +response.message);

                }
                function errorCallback(error) {
                    console.log("error" + error.message);
                }
            }
            $scope.updateCase = function (id) {
                var user = myService.get();
                user.caseid = id;
                myService.set(user);
                window.location = $(this).data('#!/docase');
            }

    });

})();

