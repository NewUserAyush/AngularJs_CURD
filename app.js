angular.module('app', ['ngMaterial'])
.controller("CURDrepoCtrl",function($scope,$rootScope,$mdDialog){
    
  $scope.Data=[
      {id:1,name:'john',age:23,email:'john@gmail.com',contactNumber:9890321345},
      {id:2,name:'ayush',age:20,email:'ayush@gmail.com',contactNumber:8909876473},
      {id:3,name:'faheem',age:26,email:'faheem@gmail.com',contactNumber:9867857824},
      {id:4,name:'sumit',age:29,email:'sumit@gmail.com',contactNumber:9028493042}
  ] ;
$rootScope.Data=$scope.Data;
$scope.showAdvanced = function(text,user,ev) {
    $rootScope.user=user;
    $rootScope.Text=text;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: false // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };
    $scope.DeleteUser=function(index){
         $rootScope.Data.splice(index, 1);
    }
    
    
function DialogController($scope, $mdDialog,$rootScope) {
    $scope.Namefunction=$rootScope.Text;
    $scope.user=$rootScope.user;
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.save = function(user) {
        
        if(user.name.$error || user.email.$error || user.age.$error || user.contactNumber.$error)
            return;
        
      user.id= $rootScope.Data.length+1;
        $rootScope.Data.push(user);
         $mdDialog.cancel();

    };
  }
    
    

});