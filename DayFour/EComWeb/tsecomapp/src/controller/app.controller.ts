import * as angular from 'angular';

interface ICustomSope extends angular.IScope{
    vm:any
}

export class MyController{
    static $inject = ['$scope'];
    user: any
  message: string;
  users: any[];

  constructor(private $scope: ICustomSope) {
    this.message = 'Welcome to My page!';
    this.user = { email: "", password: "" }
    this.users=[
        { email: "lukesh@test.com", password: "123@test" },
        { email: "johndoe@example.com", password: "password123" },
        { email: "janedoe@example.org", password: "janedoe@123" },
        { email: "admin@domain.com", password: "admin1234" },
        { email: "user@website.com", password: "user@123" }
    ];
    
    $scope['vm'] = this;
  }

  validate () {
    const usrObj = this.users.filter(el => el.email == this.user.email)[0];
    if(usrObj.password == this.user.password && usrObj){
        this.user.password = "";
        return alert(this.message);
    }
    return alert("Wrong user!...");
  }

}