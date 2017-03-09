angular
.module('apiApp')
.controller('mainCtrl', function($scope, mainService){
    // $scope.test='listen up'

    function getData() {
        mainService.getStuff()
        .then(function(response){
            $scope.data = response;
        });
    }

    // function getData = function () {
    //     mainService.getStuff()
    //     .then(function(response){
    //         $scope.data = response;
    //     })
    // };

getData();


})
