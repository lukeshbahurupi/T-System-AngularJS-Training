var authController = /** @class */ (function () {
    function authController($scope, AuthService, $location) {
        var _this = this;
        this.$scope = $scope;
        this.AuthService = AuthService;
        this.$location = $location;
        this.message = 'Welcome to My page!';
        this.errorMessage = 'Invalid username or password!';
        this.user = { username: "", password: "" };
        this.users = [];
        this.isLoggedIn = this.isSessionValid();
        this.AuthService.getUsers().then(function (response) {
            _this.users = response;
        }, function (error) {
            console.error('Error fetching users:', error);
        });
        $scope['vm'] = this;
    }
    authController.prototype.validate = function () {
        var _this = this;
        if (this.isSessionValid()) {
            this.isLoggedIn = true;
            return alert('You are already logged in.');
        }
        var usrObj = this.users.filter(function (el) { return el.username == _this.user.username; })[0];
        if (usrObj && usrObj.password == this.user.password) {
            this.user.password = "";
            this.setSession(usrObj);
            this.isLoggedIn = true;
            location.reload();
            return alert(this.message);
        }
        this.$location.path('/catlog');
        this.isLoggedIn = false;
        return alert(this.errorMessage);
    };
    authController.prototype.setSession = function (user) {
        sessionStorage.removeItem('userSession');
        var sessionData = {
            user: {
                id: user.id,
                username: user.username,
                name: {
                    firstname: user.name.firstname,
                    lastname: user.name.lastname
                }
            },
            expiry: new Date().getTime() + 60000 // 1 hour from now
        };
        sessionStorage.setItem('userSession', JSON.stringify(sessionData));
    };
    authController.prototype.isSessionValid = function () {
        var sessionData = JSON.parse(sessionStorage.getItem('userSession') || '{}');
        if (sessionData.expiry && sessionData.expiry > new Date().getTime()) {
            return true;
        }
        sessionStorage.removeItem('userSession');
        return false;
    };
    authController.prototype.checkLogin = function (callback) {
        if (this.isSessionValid()) {
            callback();
        }
        else {
            alert(this.errorMessage);
        }
    };
    authController.prototype.logout = function () {
        sessionStorage.removeItem('userSession');
        this.isLoggedIn = false;
        alert('You have been logged out.');
    };
    authController.prototype.showLoginBtn = function () {
        var userLoggedIn = this.isLoggedIn;
        return this.$location.path() !== "/auth" && !userLoggedIn;
    };
    authController.$inject = ['$scope', 'AuthService', '$location'];
    return authController;
}());

