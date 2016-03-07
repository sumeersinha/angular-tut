var app4 = angular.module('app4',[]);

app4.controller('eventCtrl',function($scope){
	$scope.dayTimeButton = true;
	$scope.capitals = [
		{"City" : "Montgomery" , "State": "Alabama"},
		{"City" : "Juneau" , "State": "Alaska"},
		{"City" : "Phoenix" , "State": "Arizona"},
		{"City" : "Little Rock" , "State": "Arkansas"}
	];

});