angular.module('devmtnTravel').controller('mainCtrl',function($scope,mainSrv) {

    var vm = this;
     vm.locations = mainSrv.travelInfo;

})
