angular.module('meanhotel').controller('HotelsController', HotelsController);

function HotelsController($http) {
    var vm = this;
    vm.title = 'MEAN Hotel App is awesome';
    $http.get('/api/hotels?count=10').then(function(response) {
        // console.log(response); // browser console
        vm.hotels = response.data;
    });
}