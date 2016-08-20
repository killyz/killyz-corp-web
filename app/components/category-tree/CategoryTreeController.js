(function () {
    
    var app = angular.module('killyz');
    
    app.controller('CategoryTreeController', CategoryTree);
    
    function CategoryTree(CategoryTreeService) {
        var vm = this;
        // vm.departments = [];
        // vm.categoryTree = [];
        // bindData();

        // function bindData() {
        //     CategoryTreeService.getDepartments().success(function (response) {
        //         var departments = response;
        //         console.log(departments);
        //     })
        // }
        //
        // function getCategories(id) {
        //     CategoryTreeService.getCategories(id).success(function (response) {
        //
        //     })
        // }

        // function bindData() {
        //     CategoryTreeService.getDepartments().success(function (response) {
        //         vm.departments = response;
        //         getCategories();
        //     });
        // }
        //
        // function getCategories() {
        //     vm.departments.forEach(function (department) {
        //         CategoryTreeService.getCategories(department._id).success(function (response) {
        //             if (response.length > 0) {
        //                 department.categories = response;
        //             }
        //             vm.categoryTree.push(department);
        //         })
        //     })
        // }
    }
    
})();