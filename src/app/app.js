(function() {
    'use strict';


    angular
        .module('myApp', ['ui.router'])
        .config(function($urlRouterProvider, $stateProvider) {
        	
            $urlRouterProvider.otherwise('/search');

            $stateProvider
        		.state('search', {
    				url: '/search',
    				templateUrl: '/src/app/movie/movie.search.html',
    				controller: "searchCtrl as search"
        		})
        		.state('detail', {
                    url: '/detail/:movieId',
        		    templateUrl: '/src/app/movie/movie.detail.html',
                    controller: 'detailCtrl as detail'
                })
        });
})();