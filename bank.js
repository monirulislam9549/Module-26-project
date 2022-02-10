document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('click button');

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);


    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    if (userEmail == 'abc@gmail.com' && userPassword == 'fff') {
        // console.log('valid user');
        window.location.href = 'bank.html'
    }
})