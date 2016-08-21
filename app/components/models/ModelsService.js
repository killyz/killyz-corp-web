(function () {

    var app = angular.module('killyz');

    app.factory('ModelsService', modelsService);

    function modelsService($http, $q) {
        return {
            getAllModels: function () {
                var d = $q.defer();
                d.resolve($http.get("http://localhost:8080/killyz-api/model/getAll"));
                return d.promise;
            }
        }
    }

})();