//home page
pokeApp.controller('MainController', ['$scope', function($scope) {
    
    
}]);

//search

pokeApp.controller('SearchController', ['$scope', 'pokeService', function($scope, pokeService) {
    $scope.pokeInput = " "; //this is whatever the user types in the bar
    $scope.submit = function() {
        
        pokeService.get({name: $scope.pokeInput}, function(pokeObject){
            $scope.pokeName = pokeObject.name;
            $scope.pokeImg = pokeObject.sprites.front_default;
        });
    };
    
}]);