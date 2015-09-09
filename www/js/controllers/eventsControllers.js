/**
 * Created by DougoueCedric on 20/08/2015.
 */
app.controller('eventController', function ($scope, $http, $state) {

  $http.get('json/data.json').success(
    function (data) {
      $scope.events = data.events;

      $scope.getPromotor = function (Id) {
        return data.promotors[Id];
      };


      $scope.formtatDate = function (timestamp, arg) {
        console.log(timestamp);
        return 'full' === arg ? moment(timestamp).format('llll') : moment(timestamp).format('ll');
      }

    });





});
