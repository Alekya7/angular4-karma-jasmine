angular.module('controllers', [])
  .controller('FirstController', ['$scope',  function($scope){
    $scope.saveData = function(){
     return 'saved with controller1';
    };

    $scope.numberPattern = /^\d*$/;
  }])
  .controller('SecondController', function($scope){
    

    $scope.saveData = function(){
      return 'saved with controller2';
    };
    $scope.numberPattern = /^abcd*$/;

  });
