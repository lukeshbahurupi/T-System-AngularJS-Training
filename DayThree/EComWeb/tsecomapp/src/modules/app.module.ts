import * as angular from 'angular';
import { MyController } from '../controller/app.controller';

angular.module('myApp',["loginModule","productModule"]);
angular.module('myApp').controller('myController', MyController);