$(document).ready(()=>{
        $('#login').click(()=>{
            let email = $('#email').val();
            let password = $("#password").val();
            console.log(email,password);
            let validate = Validate(email,password);
            if(validate){
                alert('Welcome!');
            } 
            else{
                alert('sorry Wrong user or pasword!');
            } 

        })        
    
})
