(function () {

    var app = angular.module('killyz');

    app.controller('ModelsController', modelsController);

    function modelsController(ModelsService, $rootScope, $uibModal, $uibModalStack) {
        var vm = this;
        vm.global = $rootScope;
        getModels();

        function getModels() {
            console.log('fetching');
            ModelsService.getAllModels().then(function success(response) {
                vm.global.models = response.data;
                console.log(response);
            }, function error(error) {
                throw error;
            });
        }

        vm.newModel = function () {
            vm.modalInstance = $uibModal.open({
                templateUrl: 'app/components/models/new-model.html'
            });
        };
    }

})();