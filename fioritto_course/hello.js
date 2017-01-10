// module HelloWorld
// directive hello restrict A(ttribute) not Element, hello {{ }}, ctrlr World
// ctrlr World, text = 'world'


// var app = angular.module('HelloWorld', []);
//
// app.controller('World', function($scope){
//   $scope.text = 'world.';
// });
//
// app.directive('hello', function(){
//   return {
//     restrict: 'A',
//     template: '<p>Hello, {{ text }}</p>',
//     controller: 'World'
//   };
// });

var injector = angular.injector(['ng']);

// normally angular implicitly calls injector
// call world to put text property onto a scope object
injector.invoke(['$compile', '$rootScope', function($compile, $rootScope){
  var World = function(scope){
    scope.text = 'world'; //
  };

  var hello = {
    template: '<p>Hello {{ text }}</p>',
    controller: World
  };
  // templates are passed to a function that compiles them into a function that wants a scope object passed to it  please...
  var templateFunction = $compile(hello.template);
  // new scope off the rootscope prototypically inheriting passed into new controller or nested ctrlr gets from parent ctrlr scope objecct.
  // similar to constructor where you get a new dog instance called fido etc. you get a new scope instance
  var scope = $rootScope.$new();
  World(scope); // pass our new scope obj to world which puts a text property on it
  console.log(scope.text); // text prop has been put on this.
  console.log($rootScope.text); // undefined
  var element = templateFunction(scope);
  scope.$digest(); // loop that eats and digests it all together.
  console.log(element[0].innerHTML);
  document.body.appendChild(element[0]);

}]);
