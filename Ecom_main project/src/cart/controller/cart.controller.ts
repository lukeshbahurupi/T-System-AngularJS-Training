import angular from "angular";
import { CartService } from "../services/cart.services";

interface ICustomSope extends angular.IScope {
  vm: any
}
class cartController {
  static $inject = ['$scope', 'CartService'];
  item: any;
  items: any[];
  TotalPrice: number;

  constructor(private $scope: ICustomSope, private CartService: CartService) {
    this.item = {};
    this.items = this.CartService.getItems();
    this.TotalPrice = this.CartService.getTotalPrice();
    $scope['vm'] = this;
  }

  addItem() {
    this.CartService.addItem(this.item);
    this.item = {};
  }

  removeItem(item: any) {
    this.CartService.removeItem(item);
  }

  clearCart() {
    this.CartService.clearCart();
  }
 
}

export { cartController };