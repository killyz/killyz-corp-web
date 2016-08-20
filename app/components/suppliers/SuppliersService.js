(function () {

    var app = angular.module('killyz');

    app.factory('SupplierService', supplierService);

    function supplierService($http, $q) {
        return {
            getAllSuppliers: function () {
                var d = $q.defer();
                d.resolve($http.get("http://localhost:8080/killyz-api/supplier/getAll"));
                return d.promise;
            },

            saveSupplier: function (data) {
                var config = {'Content-Type':'application/json'};
                var d = $q.defer();
                d.resolve($http.post("http://localhost:8080/killyz-api/supplier/new", data, config));
                return d.promise;
            },

            deleteSupplier: function (data) {
                var config = {'Content-Type':'application/x-www-form-urlencoded'};
                var d = $q.defer();
                var supplierData = JSON.stringify({_id:data});
                d.resolve($http.post("http://localhost:8080/killyz-api/supplier/delete", supplierData, config));
                return d.promise;
            }
        }
    }

})();