(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('landingController', landingController);
    
        landingController.$inject = [ '$rootScope'];
    function landingController($rootScope) {
    
        $rootScope.bodylayout ='main_page_que';
    }
    })();