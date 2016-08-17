(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('searchCtrl', searchCtrl);

    searchCtrl.$inject = ['movieSearch'];

    /* @ngInject */
    function searchCtrl(movieSearch) {
        var search = this; 
        search.getMovie = getMovie;
        search.title;

     

        ////////////////

        function getMovie() {
             return movieSearch.getMovie(search.title).then(
                function(data) {
                    search.movies = data.Search;

                },
                function(error) {
                    console.log(error);
                });
            }
    }
})();