angular.module('devmtnTravel').controller('mainCtrl',function($scope,mainSrv,$state) {


    var vm = this,
        view = $state.current.name,
        param = $state.params,
        locations = mainSrv.travelInfo;
     vm.locations = locations;
     vm.bookedimage = '';

    if(view === 'booked') {
        var i;
        for(i = 0; i < locations.length; i++) {
            if(locations[i].id == param.id) {
                vm.booked = locations[i];
            }
        }

    }



})
