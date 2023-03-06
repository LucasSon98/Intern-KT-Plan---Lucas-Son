// HTML Elements

const username_email_input = document.getElementById('username/email');
const password_input = document.getElementById('password');
const first_name_input = document.getElementById('First_Name');
const last_name_input = document.getElementById('Last_Name');
const address_street_input = document.getElementById('Street');
const address_street_number_input = document.getElementById('Street_Number');
const profile_picture_input = document.getElementById('Image_File');
const input_error_message = document.getElementById('input_error')
const submit_button = document.getElementById('Submit');
const gender_error_message = document.getElementById('Gender_error');
const return_button = document.getElementById('Return Main');

const check_empty_input = function (element){
    if (element.value == ""){
        element.style.border = "3px solid #f71b2a";
        return true;
    }else{
        if (element.style.border !== ""){
            element.style.border = "";
        }
        return false;
    }
}

function User(password, first_name, last_name, gender, address_street, address_number, profile_picture) {
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.address_street = address_street;
    this.address_number = address_number;
    this.profile_picture = profile_picture;
}


// Saving image in local storage

// bannerImage = document.getElementById('bannerImg');
// imgData = getBase64Image(bannerImage);
// localStorage.setItem("imgData", imgData);

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

// get image and output in img tag

// var dataImage = localStorage.getItem('imgData');
// bannerImg = document.getElementById('tableBanner');
// bannerImg.src = "data:image/png;base64," + dataImage;

// source: https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page


window.onload = function() {
    // reset input values
    username_email_input.value = "";
    password_input.value = "";
    first_name_input.value = "";
    last_name_input.value = "";
    address_street_input.value = "";
    address_street_number_input.value = "";
    profile_picture_input.value = "";
    
    // if there was a checked radio button uncheck it
    var radio = document.querySelector('input[type=radio][name=gender]:checked');

    if (radio !== null){
        radio.checked = false;
    }
}

profile_picture_input.addEventListener(
    'change',
    (element) => {
        const image = element.target.files[0];
        const reader = new FileReader();
        const user_picture = document.getElementById('user_picture');

        reader.readAsDataURL(image);
        reader.addEventListener('load', () => {
            // user_picture.removeAttribute('hidden');
            user_picture.setAttribute('src',reader.result)
        });

    }
)


submit_button.addEventListener(
    'click',
    () => {
        // Check for any empty input
        let username_email_input_isempty = check_empty_input(username_email_input);
        let password_input_isempty = check_empty_input(password_input);
        let first_name_input_isempty = check_empty_input(first_name_input);
        let last_name_input_isempty = check_empty_input(last_name_input);
        let gender_input_isempty = false;
        let address_street_input_isempty = check_empty_input(address_street_input);
        let address_street_number_input_isempty = check_empty_input(address_street_number_input);
        let profile_picture_input_isempty = check_empty_input(profile_picture_input);

        
        // Check if any of the gender options has been selected
        const gender_input = document.querySelector('input[name="gender"]:checked'); // This returns the gender radio button which is checked. If no such it returns null. 
        if (gender_input == null){
            gender_input_isempty = true;
            gender_error_message.textContent = "* Please select a gender";
            gender_error_message.style.color = "red";
        }else{
            if (gender_error_message.value !== ""){
                gender_error_message.textContent = "";
            }
            gender_input_isempty = false;
        }

        // Show error message if any input is missing. Also highlight the missing fields
        if (username_email_input_isempty || password_input_isempty || first_name_input_isempty || last_name_input_isempty || gender_input_isempty || address_street_input_isempty || address_street_number_input_isempty || profile_picture_input_isempty) {
            input_error_message.textContent = "Please fill in the missing fields highlighted in red";
        }else{ // if no input is missing first check in the local storage if there isn't another existing user with same username
            let registration_username_attempt = localStorage.getItem(username_email_input.value);

            if (!registration_username_attempt){ // if it returns a null, meaning that the username doesn't exist, save it in the local storage
                if (username_email_input.style.border !== ""){
                    username_email_input.style.border = "";
                }

                if (input_error_message.textContent !== ""){
                    input_error_message.textContent == "";
                }
                
                let user_data = new User(password_input.value, first_name_input.value, last_name_input.value, gender_input.value, address_street_input.value, address_street_number_input.value, getBase64Image(document.getElementById('user_picture')));
                let user_data_JSON = JSON.stringify(user_data);

                localStorage.setItem(username_email_input.value, user_data_JSON);

                document.getElementById('Registration box').setAttribute('hidden','hidden');
                document.getElementById('Registration Success').removeAttribute('hidden');

                let tID = setTimeout(function () {

                    // redirect page.
                    window.location.href = '/main_menu.html';
                    
                    window.clearTimeout(tID);		// clear time out.
                    
                }, 5000);
            }
            else{
                input_error_message.textContent = "A user with the same username already exists. Please try another username.";
                username_email_input.style.border = "3px solid #f71b2a";
                }
            }
            

        

    }
)

return_button.addEventListener('click', () => {
    location.href = "/main_menu.html";
})
