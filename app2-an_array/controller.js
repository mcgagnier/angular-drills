angular.module('arrayApp').controller('arrayController', function($scope, appService) {
    $scope.arrayData = appService.myData;


});
