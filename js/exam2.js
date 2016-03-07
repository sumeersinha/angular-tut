var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope){
	$scope.randomNum1 = Math.floor((Math.random()*10)+1);
	$scope.randomNum2 = Math.floor((Math.random()*10)+1);
});

app2.controller('badCtrl', function($scope){
	var badFeelings = ["Disregard", "Unimportant", "Rejected", "Powerless"];

	$scope.bad = badFeelings[Math.floor(Math.random()*4)];
});

app2.controller('goodCtrl', function($scope){
	var goodFeelings = ["Pleasure", "Awesome", "Loveable", "Generous"];

	$scope.good = goodFeelings[Math.floor(Math.random()*4)];
});