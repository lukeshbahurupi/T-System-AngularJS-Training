class CatlogService {
    static $inject = ['$http'];
  static getCatlogs: any;
    
    constructor(private $http: ng.IHttpService) {}

    getCatlogs() {
        return this.$http.get('https://fakestoreapi.com/products')
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching catlogs:', error);
                throw error;
            });
    }

    getCatlogById(id: string) {
        return this.$http.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error fetching catlog with id ${id}:`, error);
                throw error;
            });
    }

    createCatlog(catlog: any) {
        return this.$http.post('https://fakestoreapi.com/products', catlog)
            .then(response => response.data)
            .catch(error => {
                console.error('Error creating catlog:', error);
                throw error;
            });
    }

    updateCatlog(id: string, catlog: any) {
        return this.$http.put(`https://fakestoreapi.com/products/${id}`, catlog)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error updating catlog with id ${id}:`, error);
                throw error;
            });
    }

    deleteCatlog(id: string) {
        return this.$http.delete(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error deleting catlog with id ${id}:`, error);
                throw error;
            });
    }
    addItemToCart(item: any) {
        return this.$http.post("https://fakestoreapi.com/carts?userId=1", item)
            .then(response => response.data)
            .catch(error => {
                console.error('Error adding item to cart:', error);
                throw error;
            });
    }
}
export {CatlogService};