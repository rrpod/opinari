angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic) {
    $scope.navbarTitle = "Settings";
    $scope.supersonic = supersonic;
  });
