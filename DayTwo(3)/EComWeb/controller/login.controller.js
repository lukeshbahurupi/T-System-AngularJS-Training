auth.controller("LoginController",($scope)=>{
    $scope.user ={
      email:"", password:""
    }
    $scope.users=[
        { email: "lukesh@test.com", password: "123@test" },
        { email: "johndoe@example.com", password: "password123" },
        { email: "janedoe@example.org", password: "janedoe@123" },
        { email: "admin@domain.com", password: "admin1234" },
        { email: "user@website.com", password: "user@123" }
      ]
           
    $scope.Validate = () =>{
      let str = $scope.users.find(u=> u.email == $scope.user.email);
      if(str && str.password == $scope.user.password){
        $scope.user.password="";
         return alert('valid');
      }
      
        return alert('invalid!');
    }
})
