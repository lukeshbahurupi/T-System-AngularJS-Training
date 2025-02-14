var catlogController = /** @class */ (function () {
    function catlogController($scope, CatlogService) {
        var _this = this;
        this.$scope = $scope;
        this.CatlogService = CatlogService;
        this.products = [];
        this.CatlogService.getCatlogs().then(function (response) {
            _this.products = response;
        }, function (error) {
            console.error('Error fetching products:', error);
        });
        console.log(this.products);
        $scope['vm'] = this;
    }
    catlogController.$inject = ['$scope', 'CatlogService'];
    return catlogController;
}());
