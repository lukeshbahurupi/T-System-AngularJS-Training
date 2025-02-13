var app = angular.module("transflower",[]);
app.controller("LoginController",($scope)=>{
    //model
    $scope.user={
        email:"",
        pasword: ""
    }
    $scope.users=[
        { email: "lukesh@test.com", password: "123@test" },
        { email: "johndoe@example.com", password: "password123" },
        { email: "janedoe@example.org", password: "janedoe@123" },
        { email: "admin@domain.com", password: "admin1234" },
        { email: "user@website.com", password: "user@123" }
      ]
      
    $scope.Validate = () =>{
        if(true){
            alert('valid user!');
        }else{
            alert('invalide user!');
        }
    }
})

app.controller("ProductController",($scope)=>{
   

    $scope.products=[        
            { name: "Rose", description: "Red Flower" },
            { name: "Tulip", description: "Bright Colored Flower" },
            { name: "Lily", description: "White Elegant Flower" },
            { name: "Daisy", description: "Simple White Flower" },
            { name: "Sunflower", description: "Large Yellow Flower" }
    ];
})