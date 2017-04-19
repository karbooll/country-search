// 'use strict'

angular.module("CountrySearch").directive("searchInput",
    [
        '$q', function ($q) {
            return {
                restrict: 'E',
                scope: {
                    search: '&',
                    model: '=',
                    onSelected: '&',
                    label: '@'
                },
                replace: true,
                template:
                '<form>' +
                '<div class="form-group">' +
                '    <label for="country">{{label}}</label>' +
                '    <input type="text" class="form-control" type-ahead-loading="loading" placeholder="Start typing..." ng-model="model" typeahead-on-select="onItemSelected($item, $model, $label)"' +
                '        uib-typeahead="x.name for x in dataSource($viewValue)">' +
                '</div>' +
                '<i ng-show="loading" class="glyphicon glyphicon-refresh"></i>' +
                '</form>',
                // '<div><button ng-click="bla()">BUTTON</button></div>',
                link: function (scope, element, attrs) {
                    scope.dataSource = function (value) {
                        if (!value)
                            return;

                        if (value.length < 2)
                            return;

                        return scope.search()(value);
                    }

                    scope.onItemSelected = function ($item, $model, $value) {
                        scope.onSelected()($item);
                    }
                }
            }
        }
    ]);