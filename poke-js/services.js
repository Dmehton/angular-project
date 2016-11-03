pokeApp.factory('pokeService', function($resource) {
    
    return $resource('https://pokeapi.co/api/v2/pokemon/:name');
    
});