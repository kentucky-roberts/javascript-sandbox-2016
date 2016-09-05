// Instantiate the app, the 'myApp' parameter must
// match what is in ng-app
var myApp = angular.module('myApp', []);

// Create the controller, the 'ToddlerCtrl' parameter
// must match an ng-controller directive
myApp.controller('ToddlerCtrl', function($scope) {

  $scope.objects = [];
  $scope.appliedObjects = [];

  for (var i = 0; i < 10; i++) {
    var isSelected = false;
    if (i != 3 && i != 7) {
      isSelected = true;
    }
    $scope.objects.push({
      uniqueId: 'obj' + i,
      text: '$scope.objects' + i,
      isSelected: isSelected
    });
  }
  for (var j = 0; j < 10; j++) {
    var selected = false;
    if (j % 3 === 0) {
      selected = true;
    }
    $scope.appliedObjects.push({
      uniqueId: 'app' + j,
      text: '$scope.appliedObject' + j,
      isSelected: selected
    });
  }
  $scope.transferArrays = function (arrayFrom, arrayTo) {
    var selectedElements;
    selectedElements = [];
    angular.forEach(arrayFrom, function(element) {
      if (element.isSelected) {
        element.isSelected = false;
        selectedElements.push(element);
      }
    });
    angular.forEach(selectedElements, function(element) {
      arrayTo.push(arrayFrom.splice(
        arrayFrom.map(function(x) {
          return x.uniqueId;
        })
        .indexOf(element.uniqueId), 1));
    });
  };
});

// HTML in VIEW
// <button ng-click="transferArrays(objects, appliedObjects)">Add</button>
// <button ng-click="transferArrays(appliedObjects, objects)">Remove</button>