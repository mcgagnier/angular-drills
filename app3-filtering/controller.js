angular.module('filterApp').controller('filterController', function($scope, filterService) {
    // $scope.test = "can you hear me now?"
    $scope.filterData = filterService.myData;

});
