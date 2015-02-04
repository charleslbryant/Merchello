﻿angular.module('merchello.plugins.foa').Controllers('Merchello.GatewayProviders.Dialogs.FixedOverAmountShipMethodController',
    ['$scope', 'settingsResource',
    function ($scope, settingsResource) {

        $scope.providerSettings = {};
        $scope.currencySymbol = '';

        /**
        * @ngdoc method 
        * @name init
        * @function
        * 
        * @description
        * Method called on intial page load.  Loads in data from server and sets up scope.
        */
        function init() {

            // We are going to collect a currency amount in this provider, so we need the default currency symbol
            // to indicate what currecy the amount should be provided.
            var promise = settingsResource.getCurrencySymbol();
            promise.then(function (currencySymbol) {
                $scope.currencySymbol = currencySymbol;
            });
             
            var settingsString = $scope.dialogData.provider.extendedData.getValue('processorSettings');
            $scope.providerSettings = JSON.parse(settingsString);


            // Watch with object equality to convert back to a string for the submit() call on the Save button
            $scope.$watch(function () {
                return $scope.providerSettings;
            }, function (newValue, oldValue) {
                $scope.dialogData.provider.extendedData.setValue('processorSettings', angular.toJson(newValue));
            }, true);
        }

        // Initialize the controller
        init();
    }
]);