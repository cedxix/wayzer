
/**
 * Created by DougoueCedric on 26/08/2015.
 */


app.controller('eventDetailsController', function ($scope, $state) {
  var events =
  {
    "events": [{
      "date": 1410328158691,
      "name": "Chill on Sundays",
      "picture": "img/events/chill/feature-image.png",
      "location": "Domaine du Clos Bourbon RN 36-Carrefour de l'Obélisque, 77174 Villeneuve-le-Comte",
      "status": "open",
      "id": "JWT5y43YFy1mGirVVS2",
      "description": "Plus qu'une terrasse, qu'une piscine ou qu'un dj. La Chill vous accueille chaque week-end d'été.",
      "media": [{"youtube": "https://www.youtube.com/watch?v=7c06HBE5AEA"}],
      "promotorId": 0,
      "sales": [{
        "clientId": 0,
        "tickets": [{"passtype": "simple access", "numbers": 2, "paid": 20}]
      }]
    },
      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      },
      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      },
      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      },
      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      },
      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      },
      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      },
      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      },
      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      },
      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      },
      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      },
      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      },

      {
        "date": 2000328158000,
        "name": "Hip Hop vs Dancehall",
        "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "id": "JWT5y43YFpqmGirVVS2",
        "description": "Keep keep keep",
        "promotorId": 1,
        "sales": [{
          "clientId": 1,
          "tickets": [{"passtype": "vip", "numbers": 5, "paid": 250}]
        }]
      }],
    "promotors": [
      {"id": 0, "name": "La Chill", "logo_url": "img/events/chill/logo-chill.png", "likes": 75},
      {
        "id": 1,
        "name": "Dj Keep Dk",
        "logo_url": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
        "likes": 11
      }
    ]
  };

  $scope.eventId = $state.params.eId;
  $scope.events = events.events;

});
