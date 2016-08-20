(function () {

    var app = angular.module('directives', []);

    app.directive('header', header);
    app.directive('newSupplier', newSupplier);

    function header() {
        return {
            restrict: "E",
            templateUrl: "app/shared/header/header.html"
        }
    }

    function newSupplier() {
        return {
            restrict: "E",
            templateUrl: "app/components/suppliers/new-supplier.html",
            controller: "SupplierController",
            controllerAs: "supplierCtrl"
        }
    }

})();