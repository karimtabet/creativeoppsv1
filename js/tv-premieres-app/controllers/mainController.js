app.controller("mainController", function($scope, $http){

    $scope.init = function() {

        //necessary for cross domain request
        delete $http.defaults.headers.common['X-Requested-With'];
        
        $http.get('https://spreadsheets.google.com/feeds/list/15oREoh6Csjn3cidwUcAczqbtZ882EwD1Qrh1jUnXKjc/od6/public/basic?hl=en_US&alt=json').success(function(data) {
            console.log(data);
        }).error(function(error) {
 
        });
    };

});

