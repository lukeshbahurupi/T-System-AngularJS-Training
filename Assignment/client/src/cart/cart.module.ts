import angular from "angular";
import { cartController } from "./controller/cart.controller";
import { CartService } from "./services/cart.services";

angular.module("cartModule",[]).controller("cartController",cartController).service("CartService", CartService);