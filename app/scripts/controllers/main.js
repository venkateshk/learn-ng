'use strict';

/**
 * @ngdoc function
 * @name learnNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnNgApp
 */
angular.module('learnNgApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
