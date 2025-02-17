var CatlogService = /** @class */ (function () {
    function CatlogService($http) {
        this.$http = $http;
    }
    CatlogService.prototype.getCatlogs = function () {
        return this.$http.get('https://fakestoreapi.com/products')
            .then(function (response) { return response.data; })
            .catch(function (error) {
            console.error('Error fetching catlogs:', error);
            throw error;
        });
    };
    CatlogService.prototype.getCatlogById = function (id) {
        return this.$http.get("https://fakestoreapi.com/products/".concat(id))
            .then(function (response) { return response.data; })
            .catch(function (error) {
            console.error("Error fetching catlog with id ".concat(id, ":"), error);
            throw error;
        });
    };
    CatlogService.prototype.createCatlog = function (catlog) {
        return this.$http.post('https://fakestoreapi.com/products', catlog)
            .then(function (response) { return response.data; })
            .catch(function (error) {
            console.error('Error creating catlog:', error);
            throw error;
        });
    };
    CatlogService.prototype.updateCatlog = function (id, catlog) {
        return this.$http.put("https://fakestoreapi.com/products/".concat(id), catlog)
            .then(function (response) { return response.data; })
            .catch(function (error) {
            console.error("Error updating catlog with id ".concat(id, ":"), error);
            throw error;
        });
    };
    CatlogService.prototype.deleteCatlog = function (id) {
        return this.$http.delete("https://fakestoreapi.com/products/".concat(id))
            .then(function (response) { return response.data; })
            .catch(function (error) {
            console.error("Error deleting catlog with id ".concat(id, ":"), error);
            throw error;
        });
    };
    CatlogService.prototype.addItemToCart = function (item) {
        return this.$http.post("https://fakestoreapi.com/carts?userId=1", item)
            .then(function (response) { return response.data; })
            .catch(function (error) {
            console.error('Error adding item to cart:', error);
            throw error;
        });
    };
    CatlogService.$inject = ['$http'];
    return CatlogService;
}());

