/**
 * Created by DougoueCedric on 20/08/2015.
 */
app.controller('eventController', function ($scope){
    var events = {
        "events": {
            "-JWT5y43YFy1mGirVVS2": {
                "date": 1410328158691,
                "name": "Chill on Sundays",
                "picture": "img/events/chill/feature-image.png",
                "description": "Chill chill and chill",
                "status": "open",
                "id": "JWT5y43YFy1mGirVVS2",
                "description" : "Plus qu'une terrasse, qu'une piscine ou qu'un dj. La Chill vous accueille chaque week-end d'été.",
                "media" : {
                    "youtube" : "https://www.youtube.com/watch?v=7c06HBE5AEA"
                },
                "promotor": {
                    "Id": "Chill on Sundays"
                },
                "clients": [
                    {
                        "name": "Adrian Rodrigues",
                        "sexe": "male",
                        "tickets": [
                            {
                                "passtype": "vip",
                                "numbers": 5,
                                "paid": 250
                            }
                        ]
                    },
                    {
                        "name": "Jackie Merci",
                        "sexe": "female",
                        "tickets": [
                            {
                                "passtype": "simple access",
                                "numbers": 2,
                                "paid": 20
                            }
                        ]
                    }
                ]
            },
            "-JWT5y43YFpqmGirVVS2": {
                "date": 2000328158000,
                "name": "Hip Hop vs Dancehall",
                "picture": "img/events/hip/11807394_1197868100239122_1167823382180612101_o.jpg",
                "description": "Chill chill and chill",
                "id": "JWT5y43YFpqmGirVVS2",
                "description" : "Plus qu'une terrasse, qu'une piscine ou qu'un dj. La Chill vous accueille chaque week-end d'été.",
                "promotor": {
                    "Id": "Dj Keep"
                },
                "clients": [
                    {
                        "name": "Adrian Rodrigues",
                        "sexe": "male",
                        "tickets": [
                            {
                                "passtype": "vip",
                                "numbers": 5,
                                "paid": 250
                            }
                        ]
                    },
                    {
                        "name": "Jackie Merci",
                        "sexe": "female",
                        "tickets": [
                            {
                                "passtype": "simple access",
                                "numbers": 2,
                                "paid": 20
                            }
                        ]
                    },
                    {
                        "name": "Jackie Merci",
                        "sexe": "female",
                        "tickets": [
                            {
                                "passtype": "simple access",
                                "numbers": 2,
                                "paid": 20
                            }
                        ]
                    }
                ]
            }
        },
        "promotors":
        {

        },
        "sales" :
            [ {
                "eventId" : "-JWT5y43YFy1mGirVVS2",
                "userId" : "",
                "passType" : "VIP",
                "unitPrice" : 10,
                "totalNumber" : 5
            }]
    };

    $scope.events = events.events;
});
