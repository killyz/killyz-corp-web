(function () {

    var app = angular.module('killyz');

    app.factory('CategoryTreeService', CategoryTreeService);

    function CategoryTreeService($http) {
        return {
            getDepartments: function () {
                return $http.get("http://localhost:8080/killyz-api/tree/getAllDepartments");
            },

            getCategories: function (department) {
                return $http.get("http://localhost:8080/killyz-api/tree/getAllCategoriesByDepartmentId?departmentId=" + department);
            }
        }
    }

})();