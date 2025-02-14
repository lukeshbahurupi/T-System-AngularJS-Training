import angular from "angular";
import { catlogController } from "./controller/catlog.controller";
import { CatlogService } from "./catlog.services";

angular.module("catlogModule",[]).controller("catlogController",catlogController).service("CatlogService", CatlogService);