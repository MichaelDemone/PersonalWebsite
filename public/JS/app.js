
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
});

window.onload = function() {
    
    document.getElementById("play-Go4AWalk").onclick = function() {
        window.location.href = "Projects/Go4AWalk";
    }

    document.getElementById("play-website").onclick = function() {
        alert("...You're already here :)");
    }  
    
    document.getElementById("play-jumpy").onclick = function () {
        window.location.href = "Projects/JumpyTheCube";
    }
    
    document.getElementById("play-go").onclick = function() {
        window.location.href = "Projects/Go";
    }
    
    document.getElementById("play-sandbox").onclick = function() {
        window.location.href = "Projects/Sandbox";
    }
	
	document.getElementById("play-circuit").onclick = function() {
		window.location.href = "Projects/CircuitSim";
	}
    
    document.getElementById("play-QuanSized").onclick = function() {
		window.location.href = "Projects/QuanSized";
	}
}

$(function() {
    $(".g4aw-section").matchHeight();
    $(".website-section").matchHeight();
    $(".jumpy-section").matchHeight();
    $(".sandbox-section").matchHeight();
	$(".circuit-section").matchHeight();
    $(".go-section").matchHeight();
    $(".quanSized-section").matchHeight();
});