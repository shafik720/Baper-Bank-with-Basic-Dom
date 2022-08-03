
document.getElementById('submitBtn').addEventListener('click',function(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let errorEmail = document.getElementById('wrongMessage');
    let errorPassword = document.getElementById('wrongPassword');
    
    if(email.value == ''){
        errorEmail.style.display = 'block';
        errorEmail.innerText = 'You have to provide your email address';
    }else if(email.value !=='rafayelbd@gmail.com'){
        errorEmail.style.display = 'block';
        errorEmail.innerText = 'Wrong Email id !'
    }else if(password.value == ''){
        errorPassword.style.display = 'block';
        errorPassword.innerText = 'This field can"t be empty !';
        errorEmail.style.display = 'none';
    }else if(password.value != '123456'){
        errorPassword.style.display = 'block';
        errorPassword.innerText = 'Wrong password !';
        errorEmail.style.display = 'none';
    }
    else if(email.value=='rafayelbd@gmail.com' && password.value=='123456'){
        errorEmail.style.display = 'none';
        errorPassword.style.display = 'none';
        window.location.href = 'banking.html';
    }
})