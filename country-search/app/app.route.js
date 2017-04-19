'use strict'

angular.module('CountrySearch')
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/country-search', {
            templateUrl: 'views/country-search.html',
            controller: 'CountrySearchController'
        });

        $routeProvider.otherwise({ redirectTo: '/country-search' });
    }]);
