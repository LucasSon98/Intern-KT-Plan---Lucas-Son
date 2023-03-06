const Login_button = document.getElementById('Login');
const Register_button = document.getElementById('Register');

Login_button.addEventListener(
    'click',
    () => {
        location.href = "/login_menu.html";
    }
)

Register_button.addEventListener(
    'click',
    () => {
        location.href = "/register_menu.html";
    }
)