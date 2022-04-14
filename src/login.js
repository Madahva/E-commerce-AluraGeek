let inputEmail = document.getElementById('inputEmail');
let emailLabel = document.getElementById('emailLabel');

let inputPassword = document.getElementById('inputPassword');
let passwordLabel = document.getElementById('passwordLabel');

inputEmail.onclick = function () {
    emailLabel.classList.add('contact__label--active');
    inputEmail.classList.add('contact__input--active');
}
document.getElementById('email').addEventListener("blur", function () {
    emailLabel.classList.remove('contact__label--active');
    inputEmail.classList.remove('contact__input--active');
});


inputPassword.onclick = function () {
    passwordLabel.classList.add('contact__label--active');
    inputPassword.classList.add('contact__input--active');
}
document.getElementById('password').addEventListener("blur", function () {
    passwordLabel.classList.remove('contact__label--active');
    inputPassword.classList.remove('contact__input--active');
});


const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener("click", (event) => event.preventDefault());


submitBtn.addEventListener("click", () => {

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    console.log(email.value, password.value);

    /* if(email.value.trim() && password.value.trim()){
        
    } */
    window.location.href = "todos-los-productos.html";
    
   
});