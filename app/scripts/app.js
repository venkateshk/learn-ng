'use strict';

/**
 * @ngdoc overview
 * @name learnNgApp
 * @description
 * # learnNgApp
 *
 * Main module of the application.
 */
angular
  .module('learnNgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'InvoiceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
