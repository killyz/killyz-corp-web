(function () {
    
    var app = angular.module('killyz', ['directives', 'ui.router', 'ui.bootstrap']);

    app.config(router);

    function router($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/products");

        $stateProvider
            .state('models', {
                url: '/models',
                templateUrl: "app/components/models/models.html"
            })

            .state('products', {
                url: '/products',
                templateUrl: "app/components/products/products.html"
            })

            .state('orders', {
                url: '/orders',
                templateUrl: "app/components/orders/orders.html"
            })

            .state('stock', {
                url: '/stock',
                templateUrl: "app/components/stock/stock.html"
            })
        
            .state('suppliers', {
                url: '/suppliers',
                templateUrl: "app/components/suppliers/suppliers.html"
            })

            .state('artists', {
                url: '/artists',
                templateUrl: "app/components/artists/artists.html"
            })

            .state('category-tree', {
                url: '/category-tree',
                templateUrl: "app/components/category-tree/category-tree.html"
            });
    }
    
})();