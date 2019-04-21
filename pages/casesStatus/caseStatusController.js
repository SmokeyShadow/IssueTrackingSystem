(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('caseStatusController', caseController);

    caseController.$inject = ['$rootScope'];

    function caseController($rootScope, $http) {

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

function getOptions(sel) {
    var opts = [], opt;
    for (var i = 0, len = sel.options.length; i < len; i++) {
        opt = sel.options[i];
        if (opt.selected) {
            opts.push(opt.value);
        }
    }
    return opts;
}
function isFilteredCell(opts, filtercell, trs) {
    console.log(opts);
    for (var j = 0; j < opts.length; j++) {

        var cellVal1 = trs.cells[filtercell];
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
    var opts1 = getOptions(sel1);
    var opts2 = getOptions(sel2);
    var opts3 = getOptions(sel3);

    var table = document.getElementById('statusTable');
    var equal1 = equal2 = equal3 = false;
    if (opts1.length == 0 && opts2.length == 0 && opts3.length == 0) {
        for (var i = 0; i < table.rows.length; i++) {
            var trs = table.getElementsByTagName("tr")[i].style.display = "none";
        }
    }
    for (var i = 0; i < table.rows.length; i++) {
        var trs = table.getElementsByTagName("tr")[i];
        equal1 = isFilteredCell(opts1, filtercell1, trs);
        equal2 = isFilteredCell(opts2, filtercell2, trs);
        equal3 = isFilteredCell(opts3, filtercell3, trs);

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
    var opts = getOptions(sel);
    var table = document.getElementById('statusTable');
    var equal = false;
    if (opts.length == 0) {
        for (var i = 0; i < table.rows.length; i++) {
            var trs = table.getElementsByTagName("tr")[i].style.display = "none";
        }
    }
    for (var i = 0; i < table.rows.length; i++) {

        var trs = table.getElementsByTagName("tr")[i];
        equal = isFilteredCell(opts, filteredcell, trs);
        if (!equal) {
            trs.style.display = "none";
        }
        else {
            trs.style.display = "table-row";
        }
    }
}
