import angular from "angular";
import { authController } from "./controller/auth.controller";
import { AuthService } from "./servieces/auth.servieces";

angular.module("authModule",[]).controller("authController", authController).service("AuthService", AuthService);
