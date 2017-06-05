angular.module('meanhotel').directive('hotelRating', hotelRating);

function hotelRating() {
    return {
        restrict: 'E' // E=element  A=attribute
        template: '<span>Hello there</span>'
    }
}