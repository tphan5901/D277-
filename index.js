let email = document.getElementById('email').value
let confirmEmail = document.getElementById('confirmEmail').value


function validate(){
    if(email == confirmEmail){
        email.style.borderColor = 'green'
        alert('Email matches'); 
    }else{
        confirmEmail.style.borderColor = 'red';
        alert('Email does not match'); 
    }
}

document.addEventListener('keyup', function (){
    email.addEventListener('change', validate);
    confirmEmail.addEventListener('change', validate);

})