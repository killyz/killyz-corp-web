(function () {

    var app = angular.module('killyz');

    app.controller('SupplierController', supplierController);

    function supplierController(SupplierService, $uibModal, $uibModalStack, $rootScope) {
        var vm = this;
        vm.global = $rootScope;
        vm.supplier = {};
        vm.modalInstance = {};
        getSuppliers();
        
        function getSuppliers() {
            SupplierService.getAllSuppliers().then(function success(response) {
                vm.global.suppliers = response.data;
            }, function error(error) {
                throw error;
            });
        }

        function saveSupplier(data) {
            SupplierService.saveSupplier(data).then(function success(response) {
                getSuppliers();
            }, function error(error) {
                throw error;
            });
        }
        
        function getCurrentSupplier(data) {
            for (var i=0; i < vm.global.suppliers.length; i++) {
                if (vm.global.suppliers[i]._id === data) {
                    vm.global.currentSupplier = vm.global.suppliers[i];
                }
            }
        }

        vm.newSupplier = function () {
            vm.modalInstance = $uibModal.open({
                templateUrl: 'app/components/suppliers/new-supplier.html'
            });
        };
        
        vm.deleteSupplier = function () {
            SupplierService.deleteSupplier(vm.global.supplierToDelete).then( function success() {
                getSuppliers();
            });
            $uibModalStack.dismissAll();
        }

        vm.confirmDeletion = function (data) {
            vm.global.supplierToDelete = data;
            vm.modalInstance = $uibModal.open({
               templateUrl: 'app/components/suppliers/confirm-delete.html'
            });
        };
        
        vm.openDetails = function (data) {
            getCurrentSupplier(data);
          vm.modalInstance = $uibModal.open({
              templateUrl: 'app/components/suppliers/supplier-details.html',
              size: 'lg'
          })
        };

        vm.submit = function () {
            $uibModalStack.dismissAll();
            saveSupplier(vm.supplier);
        };

        vm.closeModal = function () {
            $uibModalStack.dismissAll();
        }
    }

})();