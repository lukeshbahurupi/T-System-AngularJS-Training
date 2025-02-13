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
        //   async function fetchTypedData(url: string): Promise<ApiResponse[]> {
        //       try {
        //           const response = await fetch(url);
        //           if (!response.ok) {
        //               throw new Error(`HTTP error! status: ${response.status}`);
        //           }
        //           const data: ApiResponse[] = await response.json();
        //           return data;
        //       } catch (error) {
        //           console.error('Error fetching data:', error);
        //           throw error;
        //       }
        //   }
        //   // Usage
        //   fetchTypedData('https://api.example.com/data')
        //       .then(data => console.log(data))
        //       .catch(error => console.error('Fetch error:', error));
        $scope['vm'] = this;
    }
    productController.$inject = ['$scope'];
    return productController;
}());
