pokeApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
                        templateUrl: '/pages/home.html',
                        controller: 'MainController' 
    });
    
    $routeProvider.when('/search', {
                        templateUrl: '/pages/search.html',
                        controller: 'SearchController'
    });
    
    
}]);