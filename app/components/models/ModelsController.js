(function () {

    var app = angular.module('killyz');

    app.controller('ModelsController', modelsController);

    function modelsController() {
        var vm = this;
        vm.images = [
            {thumb: 'images/1.jpg', img: 'images/1.jpg'},
            {thumb: 'images/2.jpg', img: 'images/2.jpg'},
            {thumb: 'images/3.jpg', img: 'images/3.jpg'},
            {thumb: 'images/4.jpg', img: 'images/4.jpg'},
            {thumb: 'images/5.jpg', img: 'images/5.jpg'},
            {thumb: 'images/6.jpg', img: 'images/6.jpg'},
            {thumb: 'images/7.jpg', img: 'images/7.jpg'}
        ]
    }

})();