
// controller function is passed $scope object
function MyController($scope){
  // 1. give value to clock
  // 2. updateClock function
  // 3. setInterval with function, interval = 1000
  // 4. call updateClock
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
}
