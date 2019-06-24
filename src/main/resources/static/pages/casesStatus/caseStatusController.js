(function () {
    'use strict';
    var app = angular.module('app');

    app.controller('caseStatusController', caseController);

    caseController.$inject = ['$rootScope'];

    function caseController($rootScope, $http) {

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
    app.controller('statusCtrl', function ($scope, $http, myService) {
        $scope.init = function () {
            var user = myService.get();
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
            var jsondata = {
                "id" : user.id,
                "name" : user.user
            };
            var url = "rest/case/casestatus";

            $http.post(url , jsondata ,config ).then(successCallback, errorCallback);

            console.log(jsondata );
            function successCallback(response) {
                if( response.status == 200 && response.data.success == true
                    && response.data.data != null) {
                    console.log("data" + response.data.data);
                    $scope.casestatus = response.data.data;
                    console.log("success ! contains data" );
                }
                else
                    console.log("no records found" +response.message);

            }
            function errorCallback(error) {
                console.log("error" + response.message);
            }
        }
        $scope.rateCase = function (number , caseid , ratedivid) {
            var user = myService.get();
            console.log("caseid : " + caseid + "rate id" + ratedivid);
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
            var jsondata = {
                "id" : caseid,
                "rate" : number
            };
            var url = "rest/case/rate";
            $http.post(url , jsondata ,config ).then(successCallback, errorCallback);

            console.log(jsondata );
            function successCallback(response) {
                if( response.status == 200 && response.data.success == true) {
                    $scope.ratemsg = response.data.message;
                    var modal = angular.element(document.getElementById('rate-modal'));
                    modal.css('display', 'block');
                    var modal = angular.element(document.getElementById(ratedivid));
                    modal.text( " امتیاز دادید" + number);
                    return;
                }

            }
            function errorCallback(error) {
                $scope.ratemsg = error.data.message;
                var modal = angular.element(document.getElementById('rate-modal'));
                modal.css('display', 'block');
            }
        }

    });
    app.controller('filterCtrl', function ($scope, $http, myService) {
        $scope.filterinit = function () {
            var user = myService.get();
            $scope.assignerName = user.user;
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
            var jsondata = {
                "id" : user.id
            };
            var url = "rest/case/assigneelist";

            $http.post(url , jsondata ,config ).then(successCallback, errorCallback);

            console.log(jsondata );
            function successCallback(response) {
                if( response.status == 200 && response.data.success == true
                    && response.data.data != null) {
                    console.log("data" + response.data.data);
                    $scope.assigneeList = response.data.data;
                    console.log("success ! contains data" );
                }
                else
                    console.log("no records found" +response.message);

            }
            function errorCallback(error) {
                console.log("error" + response.message);
            }
        }

    });

})();

function getOpts(sel) {
  
    var opts = [], opt;
    for (var i = 0, len = sel.options.length; i < len; i++) {
        opt = sel.options[i];
        if (opt.selected) {
            opts.push(opt.value);
        }
    }
    return opts;
}
function IsFilteredCell(opts, filtercell, trs) {
    for (var j = 0; j < opts.length; j++) {
        var cellVal1 = trs.cells[filtercell];
        console.log("compare   " + cellVal1.innerText.trim() + "  sec  " + opts[j].trim());
        if (cellVal1.innerText.trim() == opts[j].trim())
            return true;
    }
    return false;
}
//filter by all
function filterByAll(id1, id2, id3, filtercell1, filtercell2, filtercell3) {
    var sel1 = document.getElementById(id1);
    var sel2 = document.getElementById(id2);
    var sel3 = document.getElementById(id3);
    var opts1 = getOpts(sel1);
    var opts2 = getOpts(sel2);
    var opts3 = getOpts(sel3);
    var table = document.getElementById('statusTable');
    var equal1 = false;
    var equal2 = false;
    var equal3 = false;
    if (opts1.length == 0 && opts2.length == 0 && opts3.length == 0) {
        for (var i = 1; i < table.rows.length; i++) {
            var trs = table.getElementsByTagName("tr")[i].style.display = "none";
        }
    }
    //iterate on records
    for (var i = 1; i < table.rows.length; i++) {
        var trs = table.getElementsByTagName("tr")[i];
        
        equal1 = IsFilteredCell(opts1, filtercell1, trs);
        equal2 = IsFilteredCell(opts2, filtercell2, trs);
        equal3 = IsFilteredCell(opts3, filtercell3, trs);
        if (equal1 && equal2 && equal3) {
            trs.style.display = "table-row";
        }
        else {
            trs.style.display = "none";
        }
    }
}

//filter just by one 
function filterByOne(id, filteredcell) {
    var sel = document.getElementById(id);
    var opts = getOpts(sel);
    var table = document.getElementById('statusTable');
    var equal = false;
    if (opts.length == 0) {
        for (var i = 0; i < table.rows.length; i++) {
            var trs = table.getElementsByTagName("tr")[i].style.display = "none";
        }
    }
    for (var i = 0; i < table.rows.length; i++) {

        var trs = table.getElementsByTagName("tr")[i];
        equal = IsFilteredCell(opts, filteredcell, trs);
        if (!equal) {
            trs.style.display = "none";
        }
        else {
            trs.style.display = "table-row";
        }
    }
}
