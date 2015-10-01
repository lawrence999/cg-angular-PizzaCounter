angular.module('user', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('user').config(function($routeProvider) {

    $routeProvider.when('/',{templateUrl: 'user/pizza_gallery/pizza_gallery.html',controller:'PizzaGalleryCtrl',controllerAs:'pizzaGlry'});
    $routeProvider.when('/:pizzaName',{templateUrl: 'user/pizza_details/pizza_details.html'});
    $routeProvider.when('/cart',{templateUrl: 'user/pizza_cart/pizza_cart.html'});
    $routeProvider.when('/placeorder',{templateUrl: 'user/confirm_order/confirm_order.html'});
    /* Add New Routes Above */

});
