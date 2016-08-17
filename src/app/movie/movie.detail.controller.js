(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('detailCtrl', detailCtrl);

    detailCtrl.$inject = ['movieSearch', '$stateParams'];

    /* @ngInject */
    function detailCtrl(movieSearch, $stateParams) {
        var detail = this;

        movieSearch.getMovieDetail($stateParams.movieId).then(
            function(data) {
                detail.data = data;
            },
            function(error) {
                console.log(error);
            });
    }
})();
