/**
 *    developed by Iraz Irfan on 28-Dec-2019;
 */
angular.module("tutorialCtrlModule", [])

.controller("TutorialCtrl", ["$scope", function($scope) {

        $scope.tutorialObject = {};
        $scope.tutorialObject.title = "Main Page";
        $scope.tutorialObject.subTitle = "Sub Title";
        $scope.tutorialObject.bindOutput = 2;
        $scope.tutorialObject.firstname = "Iraz";
        $scope.tutorialObject.lastname = "Irfan";

        // $scope.timesTwo = function () {
        //     $scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput);
        // }
        //
        // Calculations.pythagoreanTheorem();
    }])

.controller("TutorialCtrl2", ["$scope", function ($scope) {
    $scope.secondTutorial = "This is the second tutorial!";
}])

// .factory("Calculations", function () {
//     var calculations = {};
//
//     calculations.timesTwo = function (a) {
//         return a * 2;
//     };
//
//     calculations.pythagoreanTheorem = function (a, b) {
//         return (a * a) + (b * b);
//     }
//
//     return calculations;
// })




// .directive("tbWelcomeMessage", function() {
//     return {
//         restrict: "AE",
//         template: "<div>Howdy how are you?</div>"
//     }
// });
