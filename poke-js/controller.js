//home page
pokeApp.controller('MainController', ['$scope', function($scope) {
    
    
}]);

//search

pokeApp.controller('SearchController', ['$scope', 'pokeService', function($scope, pokeService) {
    $scope.pokeInput = " "; //this is whatever the user types in the bar
    $scope.submit = function() {
        
        pokeService.get({name: $scope.pokeInput}, function(pokeObject){
            $scope.pokeName = pokeObject.name;
            $scope.pokeHeight = pokeObject.height;
            $scope.pokeWeight = pokeObject.weight;
            $scope.pokeBasexp = pokeObject.base_experience;
            
            $scope.pokeSpeed = pokeObject.stats[0].base_stat;
            $scope.pokeSecialDefense = pokeObject.stats[1].base_stat;
            $scope.pokeSpecialAttack = pokeObject.stats[2].base_stat;
            $scope.pokeDefense = pokeObject.stats[3].base_stat;
            $scope.pokeAttack = pokeObject.stats[4].base_stat;
            $scope.pokeHP = pokeObject.stats[5].base_stat;
            
            $scope.pokeImg = pokeObject.sprites.front_default;
            $scope.pokeImgbk = pokeObject.sprites.back_default;
            $scope.pokeImg2 = pokeObject.sprites.front_shiny;
            $scope.pokeImgbk2 = pokeObject.sprites.back_shiny;
            
        });
    };
    
}]);