import * as angular from 'angular';

interface ICustomSope extends angular.IScope{
    vm:any
}
export class catlogController{
    // static $inject = ['$scope'];
  
  products: any[];

  constructor() {
//   constructor(private $scope: ICustomSope) {

    this.products=[
            { name: "Rose", description: "Red Flower" },
            { name: "Tulip", description: "Bright Colored Flower" },
            { name: "Lily", description: "White Elegant Flower" },
            { name: "Daisy", description: "Simple White Flower" },
            { name: "Sunflower", description: "Large Yellow Flower" }
    ];
    
        // $scope['vm'] = this;?
    }
}