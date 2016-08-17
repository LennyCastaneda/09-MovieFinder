(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('movieSearch', movieSearch);

    movieSearch.$inject = ['$http', '$q'];

    /* @ngInject */
    function movieSearch($http, $q) {
        var service = {
            getMovie: getMovie,
            getMovieDetail : getMovieDetail
        };
        return service;

        ////////////////

        function getMovie(title) {
            var defer = $q.defer();
            // removed the 'parameter' for testing ' + parameter '
           $http.get('http://www.omdbapi.com/?s=' + title).then(
               function(response) {
                   if (typeof response.data === 'object') {
                       defer.resolve(response.data);
                   } else {
                       defer.reject(response.data);
                   }
               },
               function(error) {
                   defer.reject(error);
               }
           );

           return defer.promise;
        }

        ////////////////

        function getMovieDetail(currentMovieId) {
            var defer = $q.defer();
            // removed the 'parameter' for testing ' + parameter '
           $http.get('http://www.omdbapi.com/?i=' + currentMovieId + '&plot=full&r=json').then(
               function(response) {
                   if (typeof response.data === 'object') {
                       defer.resolve(response.data);
                   } else {
                       defer.reject(response.data);
                   }
               },
               function(error) {
                   defer.reject(error);
               }
           );

           return defer.promise;
        }
    }
})();