angular.module('admin', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('admin').config(function($routeProvider) {

    $routeProvider.when('/login',{templateUrl: 'admin/admin_view/admin_view.html',controller:'AdminViewCtrl',controllerAs:'deliver'});
    /* Add New Routes Above */

});
