function placeorderCtrl($scope,DataService,postServ){
      var vm=this;
      $scope.pageClass = 'page-about';
      vm.user={};
        vm.message=function(){
          var postdata=DataService.view_order();
          vm.user.order=postdata;
          vm.user.deliverystatus=true;
          vm.insert = postServ.postCartDtls(vm.user);
          alert("order placed");
          vm.user={};
       };
    placeorderCtrl.$inject = ['$scope','DataService','postServ'];
}
angular
  .module('user')
  .controller('ConfirmOrderCtrl',placeorderCtrl);
