var authController = /** @class */ (function () {
    function authController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to My page!';
        this.user = { email: "", password: "" };
        this.users = [
            { email: "lukesh@test.com", password: "123@test" },
            { email: "johndoe@example.com", password: "password123" },
            { email: "janedoe@example.org", password: "janedoe@123" },
            { email: "admin@domain.com", password: "admin1234" },
            { email: "user@website.com", password: "user@123" }
        ];
        $scope['vm'] = this;
    }
    authController.prototype.validate = function () {
        var _this = this;
        var usrObj = this.users.filter(function (el) { return el.email == _this.user.email; })[0];
        if (usrObj.password == this.user.password && usrObj) {
            this.user.password = "";
            return alert(this.message);
        }
        return alert("Wrong user!...");
    };
    authController.$inject = ['$scope'];
    return authController;
}());
