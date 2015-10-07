function pizzaCtrl($scope,$location,pizzaListServ){
    var vm = this;
    $scope.pageClass = 'page-home';
    $scope.isCollapsed = true;
    vm.details =pizzaListServ.getPizzaList();
    vm.details.success(function(data) {
        vm.details = data;
    });
    vm.check=function(){
        if(vm.user==="admin"&&vm.password==="admin"){
            $location.path("login");
        }else {
            window.alert("invalid username or password");
        }
    };
    pizzaCtrl.$inject = ['$scope','$location','pizzaListServ'];
}
angular
.module('user')
.controller('PizzaGalleryCtrl',pizzaCtrl);
