var productController = /** @class */ (function () {
    function productController($scope) {
        this.$scope = $scope;
        this.products = [
            { name: "Rose", description: "Red Flower" },
            { name: "Tulip", description: "Bright Colored Flower" },
            { name: "Lily", description: "White Elegant Flower" },
            { name: "Daisy", description: "Simple White Flower" },
            { name: "Sunflower", description: "Large Yellow Flower" }
        ];
        $scope['vm'] = this;
    }
    productController.$inject = ['$scope'];
    return productController;
}());
