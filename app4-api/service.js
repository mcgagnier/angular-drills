angular
.module('apiApp')
.service('mainService', function($http) {
    console.log(11111111)
     this.getStuff = function() {
        return $http({
            method: 'GET',
            url: 'http://smurfs.devmounta.in/smurfs/'
        }).then(function(response){
            console.log(2222222, response)
            stuff = response.data;
            console.log(stuff);
            return stuff;

        });
    }
    })
