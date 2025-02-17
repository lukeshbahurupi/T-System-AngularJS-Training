var MyController = /** @class */ (function () {
    function MyController() {
        this.message = 'Hello from the directive controller!';
    }
    MyController.prototype.changeMessage = function () {
        this.message = 'Message changed!';
    };
    MyController.$inject = ['$scope'];
    return MyController;
}());

