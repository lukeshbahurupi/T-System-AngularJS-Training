import * as angular from 'angular';
import { CatlogService } from '../catlog.services';

interface ICustomSope extends angular.IScope{
    vm:any
}
export class catlogController{
    static $inject = ['$scope', 'CatlogService'];
  
  products: any[];

  constructor(private $scope: ICustomSope, private CatlogService: CatlogService) {
    this.products = [];
    this.CatlogService.getCatlogs().then((response: any) => {
      this.products = response;
    }, (error: any) => {
      console.error('Error fetching products:', error);
    });
    
    $scope['vm'] = this;
  }  

}