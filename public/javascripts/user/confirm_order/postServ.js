function postServ($http) {
  var vm= this;
       vm.postCartDtls = function(obj){
         return $http({
           method  : 'POST',
           url     : 'http://localhost:3000/pizzaorder',
           data    : obj,
           headers : {'Content-Type': 'application/json'}
       });
   };
       postServ.$inject = ['$http'];
}
angular
  .module('user')
  .service('postServ',postServ);
