const Create_button = document.getElementById('Create');
const Remove_button = document.getElementById('Remove');
const Discard_button = document.getElementById('Discard');
const Upload_button = document.getElementById('Upload');
const Finish_button  = document.getElementById('Finish');
const Next_button   = document.getElementById('Next')
const enter_activity = document.querySelector('#Enter_activity');
const list = document.getElementById('list');
const list_div = document.getElementById('list_div');
const TODO_input = document.getElementById('TODO_input')

const users = [];

function User(name, surname) {
    this.name = name;
    this.surname = surname;
  }

Next_button.addEventListener(
    'click',
    () => {
        let name_input = document.getElementById('Name');
        let surname_input = document.getElementById('Surname');

        if(name_input.value == "" | surname_input.value == ""){
            window.alert("Both inputs must be filled.");
        }else{
            const welcome_menu = document.getElementById('Welcome_menu');
            const list_creation_menu = document.getElementById('List_creation_menu');
            const welcome_user = document.getElementById('Welcome_user');
            let user = new User(name_input.value, surname_input.value);
            users.push(user);
            console.log(user.name, user.surname);

            welcome_menu.setAttribute('hidden','hidden');
            list_creation_menu.removeAttribute('hidden');

            welcome_user.appendChild(document.createTextNode(`Welcom ${user.name} ${user.surname}`));

        }
    }
)

Create_button.addEventListener(
    'click',
    () => {
        let enter_activity_hidden = enter_activity.getAttribute("hidden");
        
        if(enter_activity_hidden){
            enter_activity.removeAttribute("hidden");
        }
    }

)

Discard_button.addEventListener(
    'click',
    () => {
        let enter_activity_hidden = enter_activity.getAttribute("hidden");
        
        if(!enter_activity_hidden){
            enter_activity.setAttribute("hidden","hidden");
        }

        if (TODO_input.value !== ""){
            TODO_input.value = "";
        }
    }

)

Upload_button.addEventListener(
    'click',
    () => {

        if (TODO_input.value == ""){
            window.alert("No activity was entered. Please enter an activity.");
        }else{
            if (list.innerHTML.trim() == "" & list_div.getAttribute("hidden") == "hidden"){
                list_div.removeAttribute("hidden");
            };
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(TODO_input.value));
            list.appendChild(li);
            enter_activity.setAttribute("hidden","hidden");
            TODO_input.value = "";
        }

    }

)

Remove_button.addEventListener(
    'click',
    () => {
        if (list.innerHTML.trim() == ""){
            window.alert("Nothing to remove!");
        }else{
            let remove_message = document.getElementById('remove_message');
            remove_message.removeAttribute("hidden");
            Finish_button.removeAttribute("hidden");

            let li = document.querySelectorAll("li");
            console.log(li);
            li.forEach((element) => {

                // element.style.pointerEvents = "none";
                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                element.appendChild(checkbox);
            })
            
            
        }

    }

)

Finish_button.addEventListener(
    'click',
    () => {
        let li = document.querySelectorAll("li");
        let remove_message = document.getElementById('remove_message');

        // let finish = window.confirm('Do you wish to continue?');

        li.forEach((element) => {
            let checkbox = element.childNodes[1];
            if (checkbox.checked){
                element.parentNode.removeChild(element);
            }else{
                checkbox.parentNode.removeChild(checkbox);
            };
            // element.style.pointerEvents = "auto";
        });

        remove_message.setAttribute("hidden","hidden");
        Finish_button.setAttribute("hidden","hidden");
    })




list.addEventListener(
    'click',
    (element) => {
        let is_Finish_button_hidden = Finish_button.getAttribute("hidden");
        if (is_Finish_button_hidden){
            let element_style = element.target.style.textDecoration;
            if (element_style == ""){
                element.target.style.textDecoration = "line-through";
            }else{
                element.target.style.textDecoration = "";
            }
        }
        
    })
