// HTML Elements

const Next_button   = document.getElementById('Next');
const username_input = document.getElementById('Username');
const password_input = document.getElementById('Password');
const username_error_span = document.getElementById('username_error')
const password_error_span = document.getElementById('password_error');
const login_error_span = document.getElementById('login_error');
const return_button = document.getElementById('Return Main');


window.onload = function() {
    // reset input values
    username_input.value = "";
    password_input.value = "";

}

Next_button.addEventListener(
    'click',
    () => {
        // Check if inputs are filled. If not show error messages.

        let username_isEmpty = false;
        let password_isEmpty = false;

        if(username_input.value == ""){
            if (username_error_span.getAttribute('hidden')){
                username_error_span.removeAttribute('hidden');
            }
            username_input.style.borderBottomColor = "red";
            username_isEmpty = true;
        }else{
            if (!username_error_span.getAttribute('hidden')){
                username_error_span.setAttribute('hidden','hidden');
            }
            username_input.style.borderBottomColor = "white";
            username_isEmpty = false;
        }

        if (password_input.value == "") {
            if (password_error_span.getAttribute('hidden')){
                password_error_span.removeAttribute('hidden');
            }
            password_input.style.borderBottomColor = "red";
            password_isEmpty = true;
        }else{
            if (!password_error_span.getAttribute('hidden')){
                password_error_span.setAttribute('hidden','hidden');
            }
            password_input.style.borderBottomColor = "white";
            password_isEmpty = false;
        }

        if (!(username_isEmpty || password_isEmpty)){
            // Check if the input values mathc with a registered user

            let current_user = localStorage.getItem(username_input.value);

            if (current_user === null){
                if (login_error_span.getAttribute('hidden')){
                    login_error_span.removeAttribute('hidden');
                }
                username_input.value = "";
                password_input.value = "";
                
            }else{
                let password_matches = JSON.parse(current_user).password === password_input.value;

                console.log('password_error');
                console.log(current_user.password);
                console.log(password_input.value);

                if (!password_matches){
                    if (login_error_span.getAttribute('hidden')){
                        login_error_span.removeAttribute('hidden');
                    }
                    username_input.value = "";
                    password_input.value = "";
                }else{
                    if (!login_error_span.getAttribute('hidden')){
                        login_error_span.setAttribute('hidden','hidden');
                    }
                    localStorage.setItem('current_user', username_input.value);

                    location.href = "/TODO_List_menu.html";
                }
            }


        }
    }
)


return_button.addEventListener('click', () => {
    location.href = "/main_menu.html";
})
