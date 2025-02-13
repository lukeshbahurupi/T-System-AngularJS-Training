import * as angular from 'angular';

interface ICustomSope extends angular.IScope{
    vm:any
}
export class productController{
    static $inject = ['$scope'];
  
  products: any[];

  constructor(private $scope: ICustomSope) {

    this.products=[
            { name: "Rose", description: "Red Flower" },
            { name: "Tulip", description: "Bright Colored Flower" },
            { name: "Lily", description: "White Elegant Flower" },
            { name: "Daisy", description: "Simple White Flower" },
            { name: "Sunflower", description: "Large Yellow Flower" }
    ];
    
    interface ApiResponse {
      id: number;
      name: string;
      apiData: Array<any>
  }
  
  async function fetchTypedData(url: string): Promise<ApiResponse[]> {
      try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: ApiResponse[] = await response.json();
          return data;
      } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
      }
  }
  
  // Usage
  fetchTypedData('https://api.example.com/data')
      .then(data => console.log(data))
      .catch(error => console.error('Fetch error:', error));
  
    $scope['vm'] = this;
  }

  

}