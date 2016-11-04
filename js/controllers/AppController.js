'use strict';

app.controller('AppController', function($scope, $location, notifyService){

    $scope.reset = function(){
        $scope.myStyle = {};
        $scope.myStyle1 = {};
        $scope.myStyle2 = {};
        $scope.myStyle3 = {};
    };

    $scope.sendEmail = function(email, subject, text) {

        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': '1iKHUh4SlL5Juo6Lm1IuFg',
                'message': {
                    'from_email': email,
                    'to': [
                        {
                            'email': 'Manoel.Ivanov@gmail.com',
                            'name': 'RECIPIENT NAME (OPTIONAL)',
                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': subject,
                    'html': text
                }
            }
        }).done(function (response) {
            notifyService.showSuccess('Email is sent successfully');
            console.log(response); // if you're into that sorta thing
        });
    }
});