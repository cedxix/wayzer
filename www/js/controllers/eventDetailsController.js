/**
 * Created by DougoueCedric on 26/08/2015.
 */


app.controller('eventDetailsController',
  function ($scope, $state, $http) {

    $http.get('json/data.json').success(
      function (data) {
        $scope.events = data.events;
        $scope.eventId = $state.params.eId;

        $scope.formtatDate = function (timestamp, arg) {
          console.log(timestamp);
          return 'full' === arg ? moment(timestamp).format('llll') : moment(timestamp).format('ll');
        };

        function getPromotor (id) {

          for (var i = 0; i < data.promotors.length; i++) {
//            console.log("promotor : " + data.promotors[i].name);
            if (data.promotors[i].id == id) {                            
              return data.promotors[i];
            }
          }

        };

        var id = $state.params.eId;
        $scope.promotor = getPromotor(id);

      });


  });
