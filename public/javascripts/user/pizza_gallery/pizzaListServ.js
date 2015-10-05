function pizzaListServ($http){
  var vm = this;
        vm.getPizzaList = function(){
                return $http.get('http://localhost:3000/pizza');
        };
        pizzaListServ.$inject = ['$http'];

}
angular
   .module('user')
   .service('pizzaListServ', pizzaListServ);
