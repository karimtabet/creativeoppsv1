app.controller("videosController", function($scope, $http) {
    $scope.videos = [];
    $scope.init = function() {
        var url = 'http://vimeo.com/api/v2/progressivepictures/videos.json';
        $http.get(url).success(function(data) {
            angular.forEach(data, function(value, index) {
                var video = {};
                video['title'] = value.title;
                video['description'] = value.description;
                video['url'] = value.url;
                $scope.videos.push(video);
            });
            
        }).error(function(error) {

        });
    };
});