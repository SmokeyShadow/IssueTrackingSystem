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
    app.controller('docaseCtrl', function ($scope, $window ,myService) {
        var service = myService.get();
        $scope.init = function () {
            var url = "rest/auth/allusers";

            $http.get(url ,true).then(successCallback, errorCallback);

            function successCallback(response) {
                if( response.status == 200 && response.data.success == true) {
                    $scope.users = response.data.data;
                }

            }
            function errorCallback(error) {

                console.log("error" + error.message);
            }
        }
        $scope.updateCase = function () {
            var body = angular.element(document.getElementById('casebody'));
            var assigneeSelect = angular.element(document.getElementById('assigneeSelect'));
            var casestatus = angular.element(document.getElementById('casestatus'));
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
            var jsondata = {
                "id" : service.caseId,
                "description" : body.innerHTML,
                "assigneeName" : assigneeSelect.innerHTML,
                "status" : casestatus.innerHTML
            };
            var url = "rest/case/docase";

            $http.post(url , jsondata ,config ).then(successCallback, errorCallback);

            function successCallback(response) {
                if( response.status == 200 && response.data.success == true) {
                    var json = JSON.parse(this.responseText);
                    document.getElementById('docase-msg').innerHTML = json.message;
                    document.getElementById('docase-modal').style.display = "block";
                }
                else {
                    document.getElementById('docase-msg').innerHTML = json.message;
                    document.getElementById('docase-modal').style.display = "block";
                    console.log("no records found" + response.message);
                }

            }
            function errorCallback(error) {

                console.log("error" + error.message);
            }
        }
    });
})();
