    let button = document.getElementById("submit");

        button.addEventListener("click", function(event) {
            event.preventDefault();

            let email = document.getElementById('email').value;
            let confirmEmail = document.getElementById('confirmEmail').value;

            validate(email, confirmEmail);
        });
    
        function validate(email, confirmEmail) {
            if (email != '' && confirmEmail != '' && email == confirmEmail) {
                alert('Email matches')
            } else {
                if(email == '' && confirmEmail == ''){
                    alert('please enter an email')
                }
                if(email != confirmEmail){
                alert('Email does not match');
                }
            }
        }
    

