import * as angular from 'angular';
import { AuthService } from '../servieces/auth.servieces';

interface ICustomSope extends angular.IScope {
  vm: any
}

class authController {
  static $inject = ['$scope', 'AuthService','$location'];
  user: any;
  message: string;
  errorMessage: string;
  users: any[];
  isLoggedIn: boolean;

  constructor(private $scope: ICustomSope, private AuthService: AuthService, private $location: angular.ILocationService) {
    this.message = 'Welcome to My page!';
    this.errorMessage = 'Invalid username or password!';
    this.user = { username: "", password: "" };
    this.users = [];
    this.isLoggedIn = this.isSessionValid();
    this.AuthService.getUsers().then((response: any) => {
      this.users = response;
    }, (error: any) => {
      console.error('Error fetching users:', error);
    });

    $scope['vm'] = this;
  }

  validate() {
    if (this.isSessionValid()) {
      this.isLoggedIn = true;
      return alert('You are already logged in.');
    }

    const usrObj = this.users.filter(el => el.username == this.user.username)[0];
    if (usrObj && usrObj.password == this.user.password) {
      this.user.password = "";
      this.setSession(usrObj);
      this.isLoggedIn = true;
      location.reload();
      this.$location.path('/catlog');
      return alert(this.message);
    }
    this.isLoggedIn = false;
    return alert(this.errorMessage);
  }

  setSession(user: any) {
    sessionStorage.removeItem('userSession');
    const sessionData = {
      user: {
        id: user.id,
        username: user.username,
        name: {
          firstname: user.name.firstname,
          lastname: user.name.lastname
        }
      },
      expiry: new Date().getTime() + 60000 // 1 hour from now
    };
    sessionStorage.setItem('userSession', JSON.stringify(sessionData));
  }

  isSessionValid() {
    const sessionData = JSON.parse(sessionStorage.getItem('userSession') || '{}');
    if (sessionData.expiry && sessionData.expiry > new Date().getTime()) {
      return true;
    }
    sessionStorage.removeItem('userSession');
    return false;
  }

  checkLogin(callback: () => void) {
    if (this.isSessionValid()) {
      callback();
    } else {
      alert(this.errorMessage);
    }
  }
  logout() {
    sessionStorage.removeItem('userSession');
    this.isLoggedIn = false;
    alert('You have been logged out.');
  }
  showLoginBtn() {
    const userLoggedIn = this.isLoggedIn;
    return this.$location.path() !== "/auth" && !userLoggedIn;
    }
}

export { authController };