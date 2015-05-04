// Code goes here
var app = angular.module('app', [
  'smart-table']);

app.controller('filterCtrl', ['$scope', '$filter', function (scope, filter) {
  scope.rowCollection = [
    {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
    {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
    {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
  ];

  scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
  scope.selectedPredicate = scope.predicates[0];
}]);

app.controller('filterBrokenCtrl', ['$scope', '$filter', function (scope, filter) {
  scope.rowCollection = [
    {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
    {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
    {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
  ];

  scope.rowCollectionDisplay=[].concat(scope.rowCollection);

  scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
  scope.selectedPredicate = scope.predicates[0];
}]);
