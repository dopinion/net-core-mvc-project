// tripEditorController.js
(function () {
    "use strict";

    angular.module("app-trips")
        .controller("tripEditorController", tripEditorController);

    function tripEditorController($routeParams, $http)
    {
        var vm = this;

        vm.tripName = $routeParams.tripName;

        //collection of stops
        vm.stops = [];
        vm.errorMessage = "";
        vm.isBusy = true;

        //made newStop an empty object
        vm.newStop = {}; 

        var url = "/api/trips/" + vm.tripName + "/stops";

        $http.get(url)
            .then(function(response){
                //success
                //goes into the trip controller and executes the get method that gets all the stops and puts it into our vm.stops Collection.
                angular.copy(response.data, vm.stops);
                _showMap(vm.stops);
            }, function(err){
                //failure
                vm.errorMessage = "failed to load stops";
            })
            .finally(function () {
                vm.isBusy = false;
            });

        vm.addStop = function () {

            vm.isBusy = true;

            $http.post(url, vm.newStop)
                .then(function (response) {
                    //success
                    vm.stops.push(response.data);
                    _showMap(vm.stops);
                    vm.newStop = {};

                }, function (err) {

                    //failure
                    vm.errorMessage = "failed to add stops";
                })
                .finally(function () {
                    vm.isBusy = false;
                });
        };
    }

    function _showMap(stops) {

        if(stops && stops.length > 0)
        {

            //taking the project travelmaps making sure the model is the same format as the 3rd party project
            var mapStops = _.map(stops, function(item) {
                return {
                    lat: item.latitude,
                    long: item.longitude,
                    info: item.name
                };

            });
            //show map
            travelMap.createMap({
                stops: mapStops,
                selector: "#map",
                currentStop: 1,
                initialZoom: 3
            });
        }
    }
})();