app.controller("mainController", function($scope, $http){

    $scope.results = [];
    $scope.init = function() {

        //necessary for cross domain request
        delete $http.defaults.headers.common['X-Requested-With'];

        var url = 'https://spreadsheets.google.com/feeds/list/15oREoh6Csjn3cidwUcAczqbtZ882EwD1Qrh1jUnXKjc/od6/public/basic?hl=en_US&alt=json'
        $http.get(url).success(function(data) {
            var entry = data.feed.entry
            angular.forEach(entry, function(content, index){
                content.title = content.title.$t;
                content.content = content.content.$t;
                $scope.results.push(content);
        });
        }).error(function(error) {
 
        });
    };

});

