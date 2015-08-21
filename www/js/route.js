/**
 * Created by DougoueCedric on 21/08/2015.
 */

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('events',{
        url :'/events',
        templateUrl :'templates/event-list.html',
        controller : 'eventController'
    });

    $stateProvider.state('home',{
        url :'/',
        templateUrl :'templates/home.html'

    });

    $urlRouterProvider.otherwise('/');

    //$stateProvider.state('home',{
    //  url :'/',
    //  templateUrl :'templates/home.html'
    //
    //});
});
