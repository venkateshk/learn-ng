'use strict';

// Code goes here
var app = angular.module('app', [
  'smart-table']);

app.controller('filterBrokenCtrl', ['$scope', '$http' ,'$filter', function (scope, http, filter) {
  scope.rowCollection = [];

  http.get('http://demo.ckan.org/api/3/action/package_search?q=spending').success(function(incomingData) {
    scope.rowCollection = incomingData.result.results;
  });

  scope.rowCollectionDisplay=[].concat(scope.rowCollection);
}]);
