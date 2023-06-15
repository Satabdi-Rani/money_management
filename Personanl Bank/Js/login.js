document.getElementById('btn-submit').addEventListener('click', function(){

    //Get Email
    const emailField = document.getElementById('user-email');
    const email= emailField.value;
    // console.log(email);

    //Get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);
    
    if(email == "sat@gmail.com" && password == "satabdi"){
    location.href= "bank.html";
    }
    else{
        alert("Invalid USer");
    }
})

