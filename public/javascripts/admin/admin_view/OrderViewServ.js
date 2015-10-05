function OrderViewServ($http){
    var vm=this;

    vm.getOrderDetails = function(){
        return $http.get('http://localhost:3000/pizzaview');
    };

    OrderViewServ.$inject = ['$http'];
}

angular
   .module('user')
   .service('OrderViewServ', OrderViewServ);
