var app = angular.module("transflower",[]);
app.controller("loginController",($scope)=>{
    //model
    $scope.user={
        email:"lukesh@test.com",
        pasword: "123@test"
    }

    $scope.Validate = () =>{
        if(true){
            alert('valid user!');
        }else{
            alert('invalide user!');
        }
    }
})