function pizzaDetailsServ($http){
  var vm = this;
        vm.getDetails = function(){
                return $http.get('http://localhost:3000/pizza');
        };
        pizzaDetailsServ.$inject = ['$http'];
}
angular
	.module('user')
	.service('pizzaDetailsServ',pizzaDetailsServ);
