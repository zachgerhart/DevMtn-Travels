angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers',{
                url:'/adventurers',
                parent:'home',
                templateUrl: "../views/about-adventurers.html"
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "../views/packages.html"
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html"
            });

        $urlRouterProvider
            .otherwise('/');
    });
