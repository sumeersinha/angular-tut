var app7 = angular.module('app7', []);

app7.controller('mainCtrl', function(){
	//Scopeless controller, where we use 'this' instead of $scope

	this.name = "Animal";
	this.sound = "Grrr";

	this.animalClick = function(){
		alert(this.name + " says " + this.sound);
	};
});

app7.controller('dogCtrl', function($controller){
	var childCtrl = this;

	childCtrl.child = $controller('mainCtrl', {});

	childCtrl.child.name = "Dog";
	childCtrl.child.bark = "Wooooof";

	childCtrl.child.dogData = function(){
		alert(this.name + " says " + this.sound + " and " + this.bark);
	};
});