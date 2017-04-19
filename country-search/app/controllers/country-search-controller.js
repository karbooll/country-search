// 'use strict';

angular.module("CountrySearch").controller("CountrySearchController", ["$scope", "countrySearchService",
    function ($scope, countrySearchService) {

        // bindables
        $scope.getCountries = getCountries;
        $scope.onCountrySelected = onCountrySelected;
        $scope.remove = remove;
        $scope.send = send;
        $scope.selectedCountries = [];

        function getCountries(value) {
            return countrySearchService.search(value);
        };

        function onCountrySelected(item) {
            $scope.selectedCountries.push(item);       
            $scope.selectedCountry = null;     
        }

        function remove(country) {
            _.remove($scope.selectedCountries, country);
        }

        function send() {
            countrySearchService.send($scope.selectedCountries).then(function (){
                $scope.selectedCountries = [];
            });
        }
    }
]);
