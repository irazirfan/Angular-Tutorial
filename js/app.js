/**
*    developed by Iraz Irfan on 28-Dec-2019;
*/
var app = angular.module('tutorialApp', ["ngRoute", "tutorialCtrlModule"]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
app.config(function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "views/tutorial.html",
            controller: "TutorialCtrl"
        })
        .when("/tutorialSecond", {
            templateUrl: "views/tutorialSecond.html",
            controller: "TutorialCtrl2"
        })
        .otherwise({
            redirectTo: "/"
        });
});