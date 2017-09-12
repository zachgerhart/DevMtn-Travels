angular.module('devmtnTravel').controller('packagesCtrl', function ($scope,$stateParams, mainSrv) {
    // console.log($stateParams)

    $scope.packageData = mainSrv.packageInfo
   if($stateParams.country) {
       $scope.packageData = mainSrv.packageInfo.filter(function(val){
           if (val.country === $stateParams.country) {
               return val;
           }
       })
   }


   
});
