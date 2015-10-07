angular.module('user', ['ui.bootstrap','ngAnimate','ui.utils','ngRoute','admin']);

angular.module('user').config(function($routeProvider) {

    $routeProvider.when('/',{templateUrl: 'user/pizza_gallery/pizza_gallery.html',controller:'PizzaGalleryCtrl',controllerAs:'pizzaGlry'});
    $routeProvider.when('/cart',{templateUrl: 'user/pizza_cart/pizza_cart.html',controller:'PizzaCartCtrl',controllerAs:'pizzaCrt'});
    $routeProvider.when('/placeorder',{templateUrl: 'user/confirm_order/confirm_order.html',controller:'ConfirmOrderCtrl',controllerAs:'confirmOrdr'});
    $routeProvider.when('/:pizzaName',{templateUrl: 'user/pizza_details/pizza_details.html',controller:'PizzaDetailsCtrl',controllerAs:'pizzaDtls'});

    /* Add New Routes Above */

});
