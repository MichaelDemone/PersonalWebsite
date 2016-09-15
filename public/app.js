
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    $scope.name = 'John Doe';
    console.log($scope);
    
});

document.getElementById("playGo4AWalk").onclick = function() {
    window.location.href = "Projects/Go4AWalk";
}

document.getElementById("website").onclick = function() {
    alert("...You're already here :)");
}