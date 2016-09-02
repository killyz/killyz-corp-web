(function () {

    var app = angular.module('killyz');

    app.controller('ModelsController', modelsController);

    function modelsController(ModelsService, $rootScope, $uibModal, $uibModalStack, ArtistService) {
        var vm = this;
        vm.global = $rootScope;
        getModels();
        getArtistNames();

        function getModels() {
            ModelsService.getAllModels().then(function success(response) {
                vm.global.models = response.data;
            }, function error(error) {
                throw error;
            });
        }

        function getArtistNames() {
            ArtistService.getAllArtistNames().then(function success(response) {
                vm.global.artistNames = response.data;
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