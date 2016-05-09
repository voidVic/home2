/*
 * @author Ankit Sharma <vicNWZ@gmail.com>
 */

/*
 * AngularJS Web Application
 */
var app = angular.module('webProfile', [
  'ngRoute',
  'ui.bootstrap'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "homeController as homeCtrl"})
    // Pages
    //.when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html"});
}]);

app.constant('appConstants', {
	xBox: 5,
	yBox: 7,
	xLow: 50,
	xUp: 700,
	yLow: 100,
	yUp: 500,
	blkSize: 100,
	switchingDelay: 400
});


/*pp.directive('myDirective', function() {
  return {
		scope: {
			myData: '='
		},
		template: '<div>Some Text From Directive and {{myData}}</div>'
  };
});
*/