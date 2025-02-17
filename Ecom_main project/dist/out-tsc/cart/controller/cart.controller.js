var cartController = /** @class */ (function () {
    function cartController($scope, CartService) {
        this.$scope = $scope;
        this.CartService = CartService;
        this.item = {};
        this.items = this.CartService.getItems();
        this.TotalPrice = this.CartService.getTotalPrice();
        $scope['vm'] = this;
    }
    cartController.prototype.addItem = function () {
        this.CartService.addItem(this.item);
        this.item = {};
    };
    cartController.prototype.removeItem = function (item) {
        this.CartService.removeItem(item);
    };
    cartController.prototype.clearCart = function () {
        this.CartService.clearCart();
    };
    cartController.$inject = ['$scope', 'CartService'];
    return cartController;
}());

