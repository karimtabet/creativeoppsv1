app.controller("docsController", function($scope, $http) {
    $scope.init = function() {
        //necessary for cross domain request
        delete $http.defaults.headers.common['X-Requested-With'];

        var url = 'https://spreadsheets.google.com/feeds/list/15oREoh6Csjn3cidwUcAczqbtZ882EwD1Qrh1jUnXKjc/od6/public/basic?hl=en_US&alt=json'
        $http.get(url).success(function(data) {
            var entry = data.feed.entry
            angular.forEach(entry, function(value, index) {
                var content = value.content.$t.substring(9)
                switch (value.title.$t) {
                    case "Main Header":
                        $scope.header = content;
                    case "Home":
                        $scope.home = content;
                    case "Projects":
                        $scope.projects = content;
                    case "Contact":
                        $scope.contact = content;
                }
        });
        }).error(function(error) {
 
        });
    };

});

