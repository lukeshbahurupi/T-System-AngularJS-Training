var AuthService = /** @class */ (function () {
    function AuthService($http) {
        this.$http = $http;
        this.apiUrl = 'https://fakestoreapi.com/users';
    }
    AuthService.prototype.getUsers = function () {
        return this.$http.get(this.apiUrl)
            .then(function (response) { return response.data; })
            .catch(function (error) {
            console.error('Get users error:', error);
            throw error;
        });
    };
    AuthService.prototype.getUser = function (id) {
        return this.$http.get("".concat(this.apiUrl, "/").concat(id))
            .then(function (response) { return response.data; })
            .catch(function (error) {
            console.error('Get user error:', error);
            throw error;
        });
    };
    AuthService.$inject = ['$http'];
    return AuthService;
}());

