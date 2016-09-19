
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    $scope.name = 'John Doe';
    console.log($scope);
    
});

window.onload = function() {
    
    url = "http://michaeldem.one";
    
    document.getElementById("play-Go4AWalk").onclick = function() {
        window.location.target = "_top";
        window.location.href = url + "/Project/Go4AWalk";
    }

    document.getElementById("play-website").onclick = function() {
        alert("...You're already here :)");
    }  
    
    document.getElementById("play-jumpy").onclick = function () {
        window.location.target = "_top";
        window.location.href = "Projects/JumpyTheCube";
    }
    
    document.getElementById("play-go").onclick = function() {
        window.location.target = "_top";
        window.location.href = "Projects/Go";
    }
    
    document.getElementById("play-sandbox").onclick = function() {
        window.location.target = "_top";
        window.location.href = "Projects/Sandbox"
    }
}

$(function() {
    $(".g4aw-section").matchHeight();
    $(".website-section").matchHeight();
    $(".jumpy-section").matchHeight();
    $(".sandbox-section").matchHeight();
    $(".go-section").matchHeight();
});