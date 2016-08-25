(function () {

    var app = angular.module('killyz');

    app.controller('ArtistController', artistController);

    function artistController(ArtistService, $rootScope, $uibModal, $uibModalStack) {
        var vm = this;
        vm.global = $rootScope;
        vm.artist = {};
        getArtists();

        function getArtists() {
            ArtistService.getAllArtists().then(function success(response) {
                vm.global.artists = response.data;
            }, function error(error) {
                throw error;
            });
        }

        vm.newArtist = function () {
            vm.modalInstance = $uibModal.open({
                templateUrl: 'app/components/artists/new-artist.html'
            });
        };

        vm.confirmDeletion = function (data) {
            vm.global.artistToDelete = data;
            vm.modalInstance = $uibModal.open({
                templateUrl: 'app/components/artists/confirm-delete.html'
            });
        };

        vm.deleteArtist = function () {
            ArtistService.deleteArtist(vm.global.artistToDelete).then( function success() {
                getArtists();
            });
            $uibModalStack.dismissAll();
        };

        function saveArtist(data) {
            ArtistService.saveArtist(data).then(function success(response) {
                getArtists();
            }, function error(error) {
                throw error;
            });
        }

        vm.submit = function () {
            $uibModalStack.dismissAll();
            saveArtist(vm.artist);
        };

        vm.closeModal = function () {
            $uibModalStack.dismissAll();
        }
    }

})();