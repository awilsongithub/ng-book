// module setter
var myApp = angular.module('myApp', []);

// controller function is passed $scope object
// 1. give value to clock
// 2. updateClock function
// 3. setInterval with function, interval = 1000
// 4. call updateClock
myApp.controller('MyController', function($scope){
  $scope.clock = {
    now: new Date()
  };
  function updateClock(){
    $scope.clock.now = new Date();
  }
  setInterval(function(){
    $scope.$apply(updateClock);
  }, 1000);
  updateClock();
});

myApp.controller('FirstController', function($scope){
  // initialize
  $scope.counter = 0;
  $scope.step = 0;
  $scope.operand1 = 0;
  $scope.operand2 = 0;
  $scope.operator = 0;

  $scope.reset = function(){
    // alert('reset');
    $scope.counter = 0;
    $scope.step = 0;
    $scope.operand1 = 0;
    $scope.operand2 = 0;
    $scope.operator = 0;
  };

  $scope.setOperator = function(operator){
    // alert(operator);
    if (operator === 10){
      $scope.operator = '+';
        // alert($scope.operator);
    } else if (operator === 9){
      $scope.operator = '-';
    }
  };

  $scope.setOperand = function(amount) {
    // alert('setOperand');
    if ($scope.step === 0){
      $scope.operand1 = amount;
      $scope.counter = amount;
      // alert($scope.operand1);
      $scope.step += 1;
    } else {
      $scope.operand2 = amount;
      $scope.counter = amount;
    }
  };

  $scope.calculate = function(){
    // alert($scope.operand1 + $scope.operand2);
    if ($scope.operator === '+'){
      $scope.counter = $scope.operand1 + $scope.operand2;
      setTimeout($scope.reset, 1000);
    } else if ($scope.operator === '-'){
      $scope.counter = $scope.operand1 - $scope.operand2;
      setTimeout($scope.reset, 1000);
    }
  };

});
