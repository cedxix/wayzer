
/**
 * Created by DougoueCedric on 26/08/2015.
 */


app.controller('eventDetailsController',
  function ($scope, $state, $http) {

    $http.get('json/data.json').success(
      function (data) {
        console.log(data);
        $scope.events = data.events;
        $scope.eventId = $state.params.eId;

        $scope.formtatDate = function (timestamp, arg) {
          console.log(timestamp);
          return 'full' === arg ? moment(timestamp).format('llll') : moment(timestamp).format('ll');
        }

        $scope.getPromotor = function (Id) {
          return data.promotors[Id];
        };

      });



});
