(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('caseController', caseController);

    caseController.$inject = ['$rootScope'];

    function caseController($rootScope, $http) {

        $rootScope.bodylayout = 'main_page_que';
        getDate();
    }



})();
app.controller('adminCtrl', function ($scope, $window ,myService) {
    var user = myService.get();

    if(user.role.trim() != 'مدیر')
    {
        $scope.adminAccess = 'hidden';
    }
});
function getDate() {
    var today = new Date();
    document.getElementById("casedate").value = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

}

function submitCase()
{
    var today = new Date();
    const Http = new XMLHttpRequest();
    var params = "attachment=" +document.getElementById('attachment').value+
        "&assigner=" +document.getElementById('assigner').value+
        "&casedate=" + (today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear())+
        "&subject=" +document.getElementById('subject').value+
        "&status=" +document.getElementById('status').value+
        "&description=" +document.getElementById('description').value+
        "&assignee=" +document.getElementById('assignee').value+
        "&token=" + "1"+
        "&rate=" + "-1"
    ;
    const url='rest/case/submit';
    Http.open("POST", url , true);
    Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    Http.send(params);
    Http.onreadystatechange = function ()  {
        if(this.readyState == 4 && this.status == 200)
        {
                    var json = JSON.parse(this.responseText);
                    document.getElementById('casesubmit-msg').innerHTML = json.message;
                    document.getElementById('case-modal').style.display = "block";

        }

    }



}

