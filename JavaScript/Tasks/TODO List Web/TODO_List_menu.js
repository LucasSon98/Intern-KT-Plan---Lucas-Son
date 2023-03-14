// ***** HTML Elements *****

// Buttons

// - Upper Buttons
const Create_button = document.getElementById('Create');
const Remove_button = document.getElementById('Remove');
const Edit_button = document.getElementById('Edit');

// - Create Buttons
const Discard_create_button = document.getElementById('Discard_create');
const Upload_create_button = document.getElementById('Upload_create');

// - Remove Buttons
const Finish_remove_button  = document.getElementById('Finish_remove');
const Cancel_remove_button = document.getElementById('Cancel_remove');

// - Edit TODO List Buttons
const Cancel_edit1_button = document.getElementById('Cancel_edit1');
const Cancel_edit2_button = document.getElementById('Cancel_edit2');
const Edit_activity_button = document.getElementById('Edit_activity_button');
const Edit_category_button = document.getElementById('Edit_category_button');
const Edit_due_date_button = document.getElementById('Edit_due_date_button');
const Edit_due_time_button = document.getElementById('Edit_due_time_button');
const Complete_edit_button = document.getElementById('Complete_edit');
const Discard_edit_button = document.getElementById('Discard_edit');

// - Sort/Filter button
const sort_filter_button = document.getElementById('Sort/Filter')

// - Edit Profile Buttons
const edit_profile_button = document.getElementById('Edit_profile');
const apply_changes_button = document.getElementById('Apply_changes');
const cancel_profile_edit_button = document.getElementById('Cancel_profile_edit');

// - LOGOUT Button
const logout_button = document.getElementById('LogOut');

// - List manipulation Buttons
const apply_filter_button = document.getElementById('Apply Filter Button');
const remove_filter_button = document.getElementById('Remove Filter Button');
const sort_button = document.getElementById('Sort Button');
const close_sort_filter_button = document.getElementById('Close Sort/Filter');
const apply_sort_button = document.getElementById('Sort button');


// Inputs and Select

// - Item Creation
const TODO_input = document.getElementById('TODO_input');
const category_input = document.getElementById('category');
const due_date_selector = document.getElementById('due_date');
const due_time_selector = document.getElementById('due_time');

// - Item Edit
const current_activity_input = document.getElementById('current_activity');
const current_category_input = document.getElementById('current_category');
const current_due_date_input = document.getElementById('current_due_date');
const current_due_time_input = document.getElementById('current_due_time');

// - Filter List selector
const filter_list_selector = document.getElementById('Filter List');

// Span (for error messages)

const upload_create_error_message = document.getElementById('Upload_create_error_message');

// Text

const remove_guide_message = document.getElementById('remove_guide_message');
const edit_guide_message = document.getElementById('edit_guide_message');

// TODO List elements

const list_div = document.getElementById('list_div'); // list div
const list = document.getElementById('list'); // list ul

// Others
const enter_activity = document.querySelector('#Enter_activity');
const body = document.querySelector('body');
const upper_buttons_div = document.getElementById('upper_buttons');
const edit_box_div = document.getElementById('Edit_box');
const list_manipulation_div = document.getElementById('List_manipulation_div');

// Tab buttons
const tabs_div = document.getElementById('Tabs');


// Flags

let edit_mode = false;



const current_user_username = localStorage.getItem('current_user');
const TODO_list_storage_key = current_user_username + '_TODO_List';
let current_user_data = JSON.parse(localStorage.getItem(current_user_username));

window.onload = function() {   
    
    // Set user profile information
    document.getElementById('user_first_name').value = current_user_data.first_name;
    document.getElementById('user_last_name').value = current_user_data.last_name;
    document.getElementById('user_gender').value = current_user_data.gender;
    document.getElementById('user_address_street').value = current_user_data.address_street;
    document.getElementById('user_address_number').value = current_user_data.address_number;
    document.getElementById('user_profile_picture').src = "data:image/png;base64," + current_user_data.profile_picture;
    
    // Check if current user already has a TODO List stored in the local storage
    const current_user_TODO_List = localStorage.getItem(TODO_list_storage_key);

    if (current_user_TODO_List){ // if user has a TODO List stored in the local storage show it
        list.innerHTML = current_user_TODO_List; // fill the ul element with the li elements of the stored list
        
        if (current_user_TODO_List.trim() !== ""){
            // Show the list div and the remove and edit buttons, and the list manipulation div which are hidden by default
            list_div.removeAttribute('hidden');
            Remove_button.removeAttribute('hidden');
            Edit_button.removeAttribute('hidden');
            sort_filter_button.removeAttribute('hidden')
        }
            
    }




}


// Current Date

let date = new Date();
let current_date = date.toISOString().substring(0,10);
let current_time = date.toISOString().substring(11,16);



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
};

const empty_element_value = function (element){
    if (element.value !== ""){
        element.value = "";
    }
};

function openTab(element) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(element.target.value).style.display = "block";
    element.target.className += " active";
  }


function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

// Event Handlers

Create_button.addEventListener(
    'click',
    () => {

        // Make it available for the user to upload an activity
        let enter_activity_hidden = enter_activity.getAttribute("hidden");
        
        if(enter_activity_hidden){
            enter_activity.removeAttribute("hidden");
        };

        // Update date selection values
        
        due_date_selector.min = current_date;


        // If the Remove option is available I want to disable it
        // The user must be able to do one thing at a time
        if (Finish_remove_button.getAttribute('hidden') === null){
            
            let li = document.querySelectorAll("li");
            
            li.forEach((element) => {
                let checkbox = element.childNodes[1];
                if (checkbox.checked){
                    element.parentNode.removeChild(element);
                }else{
                    checkbox.parentNode.removeChild(checkbox);
                };
            });

            remove_guide_message.setAttribute("hidden","hidden");
            Finish_remove_button.setAttribute("hidden","hidden");
        }

        // Hide upper buttons so that only the activity upload option is available
        upper_buttons_div.setAttribute('hidden','hidden');

        // If list box is displayed hide it
        if (list_div.getAttribute('hidden') === null){
            list_div.setAttribute('hidden','hidden');
        }

    }

)

due_date_selector.addEventListener(
    'change',
    () => {

        if (due_date_selector.value === current_date){
            due_time_selector.min = current_time;
            due_time_selector.max = "24:00";
        }else{
            due_time_selector.min = '';
            due_time_selector.max = '';
        }
    }
)

Discard_create_button.addEventListener(
    'click',
    () => {   
        // Hide enter activity div (activity upload option)
        let enter_activity_hidden = enter_activity.getAttribute("hidden");
        

        if(!enter_activity_hidden){
            enter_activity.setAttribute("hidden","hidden");
        }

        // Reset enter activity div

        if (upload_create_error_message.textContent != "") {
            upload_create_error_message.textContent = "";
        }

        // Empty fields if completed

        empty_element_value(TODO_input);
        empty_element_value(category_input);
        empty_element_value(due_date_selector);
        empty_element_value(due_time_selector);
        
        // Unhide upper buttons
        upper_buttons_div.removeAttribute('hidden');

        // Show TODO List
        list_div.removeAttribute('hidden');

    }

)

// UPPER BUTTONS EVENT LISTENERS

Upload_create_button.addEventListener(
    'click',
    () => {

        // Check if any field is missing
        let TODO_input_isEmpty = check_empty_input(TODO_input);
        let category_input_isEmpty = check_empty_input(category_input);
        let due_date_selector_isEmpty = check_empty_input(due_date_selector);
        let due_time_selector_isEmpty = check_empty_input(due_time_selector);

        if (TODO_input_isEmpty || category_input_isEmpty || due_date_selector_isEmpty || due_time_selector_isEmpty){
            // If any field is empty show error message
            upload_create_error_message.textContent = "Please complete the fields highlighted in red.";
        }else{
            // If all fields are filled upload item to list element

            // reset error message
            if (upload_create_error_message.textContent != "") {
                upload_create_error_message.textContent = "";
            }
            
            // list div is going to remain hidden as long as there is no item in the list element

            // now that I'm uploading a list element I want to unhide the list div element
            if (list_div.getAttribute("hidden") == "hidden"){
                list_div.removeAttribute("hidden");
            };

            // create list item (li element)
            let li = document.createElement("li");

            // set text
            li.appendChild(document.createTextNode(`${TODO_input.value} | ${category_input.value} | ${due_date_selector.value} at ${due_time_selector.value}`));
            

            // append to ul element
            list.appendChild(li);

            // Once done uploading hide enter activity div
            enter_activity.setAttribute("hidden","hidden");

            // Reset input fields value (default empty)

            empty_element_value(TODO_input);
            empty_element_value(category_input);
            empty_element_value(due_date_selector);
            empty_element_value(due_time_selector);


            // Remove and Edit buttons, and sort and filter options remain hidden as long as there is no item in the list

            // Now that the TODO list isn't empty I want the user to have access to these buttons
            if (Remove_button.getAttribute('hidden')){
                Remove_button.removeAttribute('hidden');
            }

            if (Edit_button.getAttribute('hidden')){
                Edit_button.removeAttribute('hidden');
            }

            if (sort_filter_button.getAttribute('hidden')){
                sort_filter_button.removeAttribute('hidden');
            }

            // Unhide upper buttons
            upper_buttons_div.removeAttribute('hidden');

            // Update user TODO list local storage
            localStorage.setItem(TODO_list_storage_key,list.innerHTML);

        }

    }

)

Remove_button.addEventListener(
    'click',
    () => {
            remove_guide_message.removeAttribute("hidden");
            Finish_remove_button.removeAttribute("hidden");
            Cancel_remove_button.removeAttribute("hidden");

            let li = document.querySelectorAll("li");

            li.forEach((element) => {
                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                element.appendChild(checkbox);
            })
            

            if (enter_activity.getAttribute('hidden') === null){
                enter_activity.setAttribute('hidden','hidden');
            }

            // hide upper buttons
            upper_buttons_div.setAttribute('hidden','hidden');

        }

)

Edit_button.addEventListener(
    'click',
    () => {

        // Show edit guide message and the cancel button
        edit_guide_message.removeAttribute('hidden');
        Cancel_edit1_button.removeAttribute('hidden');

        // Allow edition mode
        edit_mode = true;

        // Hide upper buttons
        upper_buttons_div.setAttribute('hidden','hidden');

    }
)



Cancel_edit1_button.addEventListener(
    'click',
    () => {
        // hide the edit guide message and this button
        edit_guide_message.setAttribute("hidden","hidden");
        Cancel_edit1_button.setAttribute("hidden","hidden");

        // Show upper buttons
        upper_buttons_div.removeAttribute('hidden');

        // Disable edition mode
        edit_mode = false;
    }
)


list.addEventListener(
    'mouseover',
    (element) => {
        if (edit_mode){
            // When hovering over a list element it turns blue
            element.target.style.color = "#1484b8";
        }
    }
)

list.addEventListener(
    'mouseout',
    (element) => {
        if (edit_mode){
            // When hovering out a list element it turns back to black
            element.target.style.color = "black";
        }
        
    }
)

// Remove mode buttons event handlers

Finish_remove_button.addEventListener(
    'click',
    () => {
        let li = document.querySelectorAll("li");

        li.forEach((element) => {
            let checkbox = element.childNodes[1];
            if (checkbox.checked){
                element.parentNode.removeChild(element);
            }else{list
                checkbox.parentNode.removeChild(checkbox);
            };
        });

        remove_guide_message.setAttribute("hidden","hidden");
        Finish_remove_button.setAttribute("hidden","hidden");
        Cancel_remove_button.setAttribute("hidden","hidden");

        if (list.innerHTML.trim() == ""){ // if all list elements where deleted hide the Remove and Edit buttons, and the list manipulation div since there is nothing to remove or edit
            if (Remove_button.getAttribute('hidden') == null){
                Remove_button.setAttribute('hidden','hidden');
            }

            if (Edit_button.getAttribute('hidden') == null){
                Edit_button.setAttribute('hidden','hidden');
            }

            if (sort_filter_button.getAttribute('hidden') == null){
                sort_filter_button.setAttribute('hidden','hidden');
            }
        }

        // Show upper buttons 
        upper_buttons_div.removeAttribute('hidden');

        // Update user todo list local storage
        localStorage.setItem(TODO_list_storage_key,list.innerHTML);
        
    }
)

Cancel_remove_button.addEventListener(
    'click',
    () => {
        let li = document.querySelectorAll("li");

        li.forEach((element) => {
            let checkbox = element.childNodes[1];
            checkbox.parentNode.removeChild(checkbox);
        });

        remove_guide_message.setAttribute("hidden","hidden");
        Finish_remove_button.setAttribute("hidden","hidden");
        Cancel_remove_button.setAttribute("hidden","hidden");

        // Show upper buttons 
        upper_buttons_div.removeAttribute('hidden');

    }
)




list.addEventListener(
    'click',
    (element) => {
        if (edit_mode){
            // Show Edit box
            edit_box_div.removeAttribute('hidden');

            
            
            // Get list item properties from item string using string methods
            let item_text = element.target.innerHTML;
            item_text = item_text.split(' | ');
            let item_activity = item_text[0];
            let item_category = item_text[1];
            let item_due_date = item_text[2];
            item_due_date = item_due_date.split(' at ');
            let item_due_time = item_due_date[1];
            item_due_date = item_due_date[0];

            // Upload item properties to input values
            current_activity_input.value = item_activity;
            current_category_input.value = item_category;
            current_due_date_input.value = item_due_date;
            current_due_time_input.value = item_due_time;

            // firstly remove any list with the id property to avoid duplicates
            const editing_item = document.getElementById('editing item');
            if (editing_item !== null){
                editing_item.removeAttribute('id');
            }
            

            // set current editing item id for easy accessibility
            element.target.setAttribute('id', "editing item");

            Cancel_edit1_button.setAttribute('hidden','hidden');

            // input should always be disabled 
            current_activity_input.setAttribute('disabled',true);
            current_category_input.setAttribute('disabled',true);
            current_due_date_input.setAttribute('disabled',true);
            current_due_time_input.setAttribute('disabled',true);

            Edit_activity_button.textContent = "Edit";
            Edit_category_button.textContent = "Edit";
            Edit_due_date_button.textContent = "Edit";
            Edit_due_time_button.textContent = "Edit";


            


        }else{
            let is_Finish_remove_button_hidden = Finish_remove_button.getAttribute("hidden");
            if (is_Finish_remove_button_hidden){
                let element_style = element.target.style.textDecoration;
                if (element_style == ""){
                    element.target.style.textDecoration = "line-through";
                }else{
                    element.target.style.textDecoration = "";
                }
            }
        }
        
        
    })


// EDIT BOX buttons event listeners

Edit_activity_button.addEventListener(
    'click',
    (element) => {
        if (element.target.textContent == "Edit"){
            // enable input editing
            current_activity_input.removeAttribute('disabled');

            // change button to Cancel
            element.target.textContent = "Cancel";
        }else{
            // if input borders are in red reset to default
            if (current_activity_input.style.border != ""){
                current_activity_input.style.border = ""
            }

            // disable input
            current_activity_input.setAttribute('disabled',true);

            // set original value
            const editing_item = document.getElementById('editing item');
            let item_text = editing_item.innerHTML;
            item_text = item_text.split(' | ');
            let item_activity = item_text[0];

            current_activity_input.value = item_activity;

            // Change button name to Edit
            element.target.textContent = "Edit";
        }
        
    }
)

Edit_category_button.addEventListener(
    'click',
    (element) => {
        if (element.target.textContent == "Edit"){
            // enable input editing
            current_category_input.removeAttribute('disabled');

            // change button to Cancel
            element.target.textContent = "Cancel";
        }else{
            // disable input
            current_category_input.setAttribute('disabled',true);

            // set original value
            const editing_item = document.getElementById('editing item');
            let item_text = editing_item.innerHTML;
            item_text = item_text.split(' | ');
            let item_category = item_text[1];

            current_category_input.value = item_category;

            // Change button name to Edit
            element.target.textContent = "Edit";
        }
    }
)

Edit_due_date_button.addEventListener(
    'click',
    (element) => {
        if (element.target.textContent == "Edit"){
            // enable input editing
            current_due_date_input.removeAttribute('disabled');

            // change button to Cancel
            element.target.textContent = "Cancel";
        }else{
            // if input borders are in red reset to default
            if (current_due_date_input.style.border != ""){
                current_due_date_input.style.border = ""
            }

            // disable input
            current_due_date_input.setAttribute('disabled',true);

            // set original value
            const editing_item = document.getElementById('editing item');
            let item_text = editing_item.innerHTML;
            item_text = item_text.split(' | ');
            let item_due_date = item_text[2];
            item_due_date = item_due_date.split(' at ');
            item_due_date = item_due_date[0];

            current_due_date_input.value = item_due_date;

            // Change button name to Edit
            element.target.textContent = "Edit";
        }

        current_due_date_input.min = current_date;
    }
)

Edit_due_time_button.addEventListener(
    'click',
    (element) => {
        if (element.target.textContent == "Edit"){
            // enable input editing
            current_due_time_input.removeAttribute('disabled');

            // change button to Cancel
            element.target.textContent = "Cancel";
        }else{
            // if input borders are in red reset to default
            if (current_due_time_input.style.border != ""){
                current_due_time_input.style.border = ""
            }

            // disable input
            current_due_time_input.setAttribute('disabled',true);

            // set original value
            const editing_item = document.getElementById('editing item');
            let item_text = editing_item.innerHTML;
            item_text = item_text.split(' | ');
            let item_due_date = item_text[2];
            item_due_date = item_due_date.split(' at ');
            let item_due_time = item_due_date[1];
            item_due_date = item_due_date[0];

            current_due_time_input.value = item_due_time;

            // Change button name to Edit
            element.target.textContent = "Edit";
        }
    }
)

Complete_edit_button.addEventListener(
    'click',
    () => {
        // Check if there are any empty inputs
        let current_activity_input_isEmpty = check_empty_input(current_activity_input);
        let current_category_input_isEmpty = check_empty_input(current_category_input);
        let current_due_date_input_isEmpty = check_empty_input(current_due_date_input);
        let current_due_time_input_isEmpty = check_empty_input(current_due_time_input);
        const list_edit_error = document.getElementById('List_edit_error');

        // if there is an empty input show the error message. Otherwise, proceed to edit list item
        if (current_activity_input_isEmpty || current_category_input_isEmpty || current_due_date_input_isEmpty || current_due_time_input_isEmpty){
            // Show error message only if hidden
            if (list_edit_error.getAttribute('hidden')){
                list_edit_error.removeAttribute('hidden');
            }
        }else{
            // Hide error message if shown
            if (!list_edit_error.getAttribute('hidden')){
                list_edit_error.setAttribute('hidden','hidden');
            }
            // get currently editing item
            const editing_item = document.getElementById('editing item');

            // Update currently editing item
            editing_item.innerHTML = `${current_activity_input.value} | ${current_category_input.value} | ${current_due_date_input.value} at ${current_due_time_input.value}`;
            
            // remove currently editing item id since we won't be using it anymore, and to avoid confussions
            editing_item.removeAttribute('id');
            
            // hide edit box
            edit_box_div.setAttribute('hidden','hidden');

            // show cancel edit1
            Cancel_edit1_button.removeAttribute('hidden');


            // Update user todo list local storage
            localStorage.setItem(TODO_list_storage_key,list.innerHTML);
        }   
    }
)

Discard_edit_button.addEventListener(
    'click',
    () => {
        // get currently editing item
        const editing_item = document.getElementById('editing item');

        // remove currently editing item id since we won't be using it anymore, and to avoid confussions
        editing_item.removeAttribute('id');

        // hide edit box
        edit_box_div.setAttribute('hidden','hidden');

        // show cancel edit1
        Cancel_edit1_button.removeAttribute('hidden');
    }
)

Cancel_edit2_button.addEventListener(
    'click',
    () => {
        // hide the edit guide message and this button
        edit_guide_message.setAttribute("hidden","hidden");
        Cancel_edit1_button.setAttribute("hidden","hidden");

        // get currently editing item
        const editing_item = document.getElementById('editing item');

        // remove currently editing item id since we won't be using it anymore, and to avoid confussions
        editing_item.removeAttribute('id');

        // Hide the edit box
        edit_box_div.setAttribute('hidden','hidden');

        // Show upper buttons
        upper_buttons_div.removeAttribute('hidden');

        // Disable edition mode
        edit_mode = false;
    }
)

tabs_div.addEventListener('click', (element) => {
    openTab(element);
})


logout_button.addEventListener('click', () => {
    location.href = "/main_menu.html";
})


// *** Profile Edit ***


edit_profile_button.addEventListener('click', (element) => {
    const edit_user_profile_picture = document.getElementById('edit_user_profile_picture');
    const edit_user_first_name = document.getElementById('user_first_name');
    const edit_user_last_name = document.getElementById('user_last_name');
    const edit_user_gender = document.getElementById('user_gender');
    const edit_user_address_street = document.getElementById('user_address_street');
    const edit_user_address_number = document.getElementById('user_address_number');

    // Enable inputs to edit
    edit_user_profile_picture.labels[0].removeAttribute('hidden');
    edit_user_first_name.removeAttribute('disabled');
    edit_user_last_name.removeAttribute('disabled');
    edit_user_gender.removeAttribute('disabled');
    edit_user_address_street.removeAttribute('disabled');
    edit_user_address_number.removeAttribute('disabled');

    // Hide this button and show the apply changes and cancel button
    element.target.setAttribute('hidden','hidden');
    apply_changes_button.removeAttribute('hidden');
    cancel_profile_edit_button.removeAttribute('hidden');
})



cancel_profile_edit_button.addEventListener('click', () => {
    const edit_user_profile_picture = document.getElementById('edit_user_profile_picture');
    const edit_user_first_name = document.getElementById('user_first_name');
    const edit_user_last_name = document.getElementById('user_last_name');
    const edit_user_gender = document.getElementById('user_gender');
    const edit_user_address_street = document.getElementById('user_address_street');
    const edit_user_address_number = document.getElementById('user_address_number');
    const profile_edit_error = document.getElementById('Profile_edit_error');


    // Reset original values
    document.getElementById('user_first_name').value = current_user_data.first_name;
    document.getElementById('user_last_name').value = current_user_data.last_name;
    document.getElementById('user_gender').value = current_user_data.gender;
    document.getElementById('user_address_street').value = current_user_data.address_street;
    document.getElementById('user_address_number').value = current_user_data.address_number;
    document.getElementById('user_profile_picture').src = "data:image/png;base64," + current_user_data.profile_picture;
    
    // Disable inputs to edit
    edit_user_profile_picture.labels[0].setAttribute('hidden','hidden');
    edit_user_first_name.setAttribute('disabled',true);
    edit_user_last_name.setAttribute('disabled',true);
    edit_user_gender.setAttribute('disabled',true);
    edit_user_address_street.setAttribute('disabled',true);
    edit_user_address_number.setAttribute('disabled',true);

    // Hide this button and the apply changes button. Show the edit profile button
    edit_profile_button.removeAttribute('hidden','hidden')
    apply_changes_button.setAttribute('hidden','hidden');
    cancel_profile_edit_button.setAttribute('hidden','hidden');

    // Hide error message if shown
    if (!profile_edit_error.getAttribute('hidden')){
        profile_edit_error.setAttribute('hidden','hidden');
    }

    // If there is an input with red borders set it back to normal

    if (edit_user_first_name.style.border != ""){
        edit_user_first_name.style.border = ""
    }
    if (edit_user_last_name.style.border != ""){
        edit_user_last_name.style.border = ""
    }
    if (edit_user_address_street.style.border != ""){
        edit_user_address_street.style.border = ""
    }
    if (edit_user_address_number.style.border != ""){
        edit_user_address_number.style.border = ""
    }

})



apply_changes_button.addEventListener('click', () => {
    const edit_user_profile_picture = document.getElementById('edit_user_profile_picture');
    const edit_user_first_name = document.getElementById('user_first_name');
    const edit_user_last_name = document.getElementById('user_last_name');
    const edit_user_gender = document.getElementById('user_gender');
    const edit_user_address_street = document.getElementById('user_address_street');
    const edit_user_address_number = document.getElementById('user_address_number');
    const profile_edit_error = document.getElementById('Profile_edit_error');

    // Check if there are any empty inputs
    let edit_user_first_name_isEmpty = check_empty_input(edit_user_first_name);
    let edit_user_last_name_isEmpty = check_empty_input(edit_user_last_name);
    let edit_user_address_street_isEmpty = check_empty_input(edit_user_address_street);
    let edit_user_address_number_isEmpty = check_empty_input(edit_user_address_number);

    // if there is an empty input show the error message. Otherwise, proceed to edit list item
    if (edit_user_first_name_isEmpty || edit_user_last_name_isEmpty || edit_user_address_street_isEmpty || edit_user_address_number_isEmpty){
        // Show error message only if hidden
        if (profile_edit_error.getAttribute('hidden')){
            profile_edit_error.removeAttribute('hidden');
        }
    }else{
        // Hide error message if shown
        if (!profile_edit_error.getAttribute('hidden')){
            profile_edit_error.setAttribute('hidden','hidden');
        }

        // Update current user data object properties and save it in the local storage
        current_user_data.first_name = edit_user_first_name.value;
        current_user_data.last_name = edit_user_last_name.value;
        current_user_data.gender = edit_user_gender.value;
        current_user_data.address_street = edit_user_address_street.value;
        current_user_data.address_number = edit_user_address_number.value;
        if (edit_user_profile_picture.value !== ""){
            current_user_data.profile_picture = getBase64Image(document.getElementById('edit_user_profile_picture_img'));
        }
        

        localStorage.setItem(current_user_username,JSON.stringify(current_user_data));

        // Update user profile values
        edit_user_first_name.value = current_user_data.first_name;
        edit_user_last_name.value = current_user_data.last_name;
        edit_user_gender.value = current_user_data.gender;
        edit_user_address_street.value = current_user_data.address_street;
        edit_user_address_number.value = current_user_data.address_number;
        if (edit_user_profile_picture.value !== ""){
            document.getElementById('user_profile_picture').src = "data:image/png;base64," + current_user_data.profile_picture;
        }
        
        



        // Disable inputs to edit
        edit_user_profile_picture.labels[0].setAttribute('hidden','hidden');
        edit_user_first_name.setAttribute('disabled',true);
        edit_user_last_name.setAttribute('disabled',true);
        edit_user_gender.setAttribute('disabled',true);
        edit_user_address_street.setAttribute('disabled',true);
        edit_user_address_number.setAttribute('disabled',true);

        // Hide this button and the cancel button. Show the edit profile button
        edit_profile_button.removeAttribute('hidden','hidden')
        apply_changes_button.setAttribute('hidden','hidden');
        cancel_profile_edit_button.setAttribute('hidden','hidden');
    }


})

// This is for the user profile image edit
document.getElementById('edit_user_profile_picture').addEventListener(
    'change',
    (element) => {

        const image = element.target.files[0];
        const reader = new FileReader();
        const user_profile_picture = document.getElementById('user_profile_picture');
        const edit_user_profile_picture_img = document.getElementById('edit_user_profile_picture_img');

        reader.readAsDataURL(image);
        reader.addEventListener('load', () => {
            // user_picture.removeAttribute('hidden');
            user_profile_picture.setAttribute('src',reader.result);
            edit_user_profile_picture_img.setAttribute('src',reader.result)
        });

    }
)


// List manipulation Buttons Event Listeners


sort_filter_button.addEventListener('click', () => {
    list_manipulation_div.removeAttribute('hidden');

    // hide upper buttons
    if(!upper_buttons_div.getAttribute('hidden')){
        upper_buttons_div.setAttribute('hidden','hidden');
    }

    // hide error messages if there are any unhidden
    const sort_filter_error_messages = document.querySelectorAll('span[name="error message sort/filter"]');
    sort_filter_error_messages.forEach((element) => {
        if(!element.getAttribute('hidden')){
            element.setAttribute('hidden','hidden');
        }
    })

    const sort_filter_inputs = document.querySelectorAll('[name="sort/filter input"]');
    sort_filter_inputs.forEach((element) => {
        if(element.style.border != ""){
            element.style.border = "";
        }
    })

})

filter_list_selector.addEventListener('change', (element) => {
    let value = element.target.value;
    const sort_date_range_div = document.getElementById('Filter date range');
    const sort_category_div = document.getElementById('Filter category');
    const filter_error_message = document.getElementById('Filter error message');

    if(!filter_error_message.getAttribute('hidden')){
        filter_error_message.setAttribute('hidden','hidden');
        element.target.style.border = "";
    }

    if(value === "Date range"){
        if (sort_date_range_div.getAttribute('hidden')){
            sort_date_range_div.removeAttribute('hidden');
        }

        if (!sort_category_div.getAttribute('hidden')){
            sort_category_div.setAttribute('hidden','hidden');
        }
    }else if (value === "Category"){
        if (sort_category_div.getAttribute('hidden')){
            sort_category_div.removeAttribute('hidden');
        }

        if (!sort_date_range_div.getAttribute('hidden')){
            sort_date_range_div.setAttribute('hidden','hidden');
        }
    }else{
        if (!sort_category_div.getAttribute('hidden')){
            sort_category_div.setAttribute('hidden','hidden');
        }

        if (!sort_date_range_div.getAttribute('hidden')){
            sort_date_range_div.setAttribute('hidden','hidden');
        }
    }
})



apply_filter_button.addEventListener('click', ()=> {
    const filter = document.getElementById('Filter List');
    const filter_error_message = document.getElementById('Filter error message');

    let filter_isEmpty = check_empty_input(filter);

    // Check if a filter option has been selected
    if (filter_isEmpty){// Uppon empty filter option
        // show error message if hidden
        if(filter_error_message.getAttribute('hidden')){
            filter_error_message.removeAttribute('hidden');
        }

    }else{ // If not empty check which option was selected
        // First hide error message if shown
        if(!filter_error_message.getAttribute('hidden')){
            filter_error_message.setAttribute('hidden','hidden');
        }

        const list_items = document.querySelectorAll('li');

        if(filter.value === "Date range"){ 
            const date_filter_from = document.getElementById('from_date_filter');
            const date_filter_to = document.getElementById('to_date_filter');
            const date_filter_error_message = document.getElementById('Filter date range error');

            let date_filter_from_isEmpty = check_empty_input(date_filter_from);
            let date_filter_to_isEmpty = check_empty_input(date_filter_to);

            if(date_filter_from_isEmpty || date_filter_to_isEmpty){ // Check that both input fields for filtering by date range are filled
                if(date_filter_error_message.getAttribute('hidden')){
                    date_filter_error_message.removeAttribute('hidden');
                }
            }else{

                if(!date_filter_error_message.getAttribute('hidden')){
                    date_filter_error_message.setAttribute('hidden','hidden');
                }

                // filter list by date range
                list_items.forEach((element) => {
                    let item_text = element.innerHTML;
                    item_text = item_text.split(' | ');
                    let item_due_date = item_text[2];
                    item_due_date = item_due_date.split(' at ');
                    item_due_date = item_due_date[0];
                    
                    if ( date_filter_from.value >= item_due_date || item_due_date >= date_filter_to.value){
                        element.setAttribute('hidden','hidden');
                    }
                    
                })
            }
                
        }else if(filter.value === "Category"){
            const category_filter_error_message = document.getElementById('Filter category error');
            let category_filter_isEmpty;

            // Check if any of gender filter options has been selected
            const category_filter = document.querySelector('input[name="category"]:checked'); // This returns the gender radio button which is checked. If no such it returns null. 
            if (category_filter == null){
                if(category_filter_error_message.getAttribute('hidden')){
                    category_filter_error_message.removeAttribute('hidden');
                }
                category_filter_isEmpty = true;
            }else{
                if(!category_filter_error_message.getAttribute('hidden')){
                    category_filter_error_message.setAttribute('hidden','hidden');
                }
                category_filter_isEmpty = false;
            }

            // filter list by chosen category as long as one option has been selected
             
            if(!category_filter_isEmpty){
                list_items.forEach((element) => {
                    let item_text = element.innerHTML;
                    item_text = item_text.split(' | ');
                    let item_category = item_text[1];
                    
                    if (item_category !== category_filter.value){
                        element.setAttribute('hidden','hidden');
                    }
                })
            }
    

        }else if(filter.value == "Status Done"){
            // filter list by chosen category
            list_items.forEach((element) => {
                if (element.style.textDecoration !== "line-through"){
                    element.setAttribute('hidden','hidden');
                }
            })

        }else if(filter.value == "Status Pending"){
            // filter list by chosen category
            list_items.forEach((element) => {
                if (element.style.textDecoration !== ""){
                    element.setAttribute('hidden','hidden');
                }
            })
        }
    }
        
})


remove_filter_button.addEventListener('click', () => {
    const TODO_list = document.querySelectorAll('li');

    TODO_list.forEach((element) => {
        if (element.getAttribute('hidden')){
            element.removeAttribute('hidden');
        }
    })

    const sort_filter_error_messages = document.querySelectorAll('span[name="error message sort/filter"]');
    sort_filter_error_messages.forEach((element) => {
        if(!element.getAttribute('hidden')){
            element.setAttribute('hidden','hidden');
        }
    })

    const sort_filter_inputs = document.querySelectorAll('[name="sort/filter input"]');
    sort_filter_inputs.forEach((element) => {
        if(element.style.border != ""){
            element.style.border = "";
        }
    })

})


close_sort_filter_button.addEventListener('click', () => {
    // hide list manipulation div
    if(!list_manipulation_div.getAttribute('hidden')){
        list_manipulation_div.setAttribute('hidden','hidden')
    }

    // show upper buttons

    if(upper_buttons_div.getAttribute('hidden')){
        upper_buttons_div.removeAttribute('hidden');
    }


    const sort_filter_error_messages = document.querySelectorAll('span[name="error message sort/filter"]');
    sort_filter_error_messages.forEach((element) => {
        if(!element.getAttribute('hidden')){
            element.setAttribute('hidden','hidden');
        }
    })

    const sort_filter_inputs = document.querySelectorAll('[name="sort/filter input"]');
    sort_filter_inputs.forEach((element) => {
        if(element.style.border != ""){
            element.style.border = "";
        }
    })
})


apply_sort_button.addEventListener('click', ()=> {
    const sort_error_message = document.getElementById('Sort error message');
    const sort_option = document.getElementById('Sort List');
    let sort_option_isEmpty = check_empty_input(sort_option);

    if(sort_option_isEmpty){
        if(sort_error_message.getAttribute('hidden')){
            sort_error_message.removeAttribute('hidden');
        }
    }else{
        if(!sort_error_message.getAttribute('hidden')){
            sort_error_message.setAttribute('hidden','hidden');
        }

        const TODO_list_array = []; // it is an array where each element is an obect containing the list li element's full innerHTML (item_text), the item's activity name (item_task) and the item's due date (item_due_date)
        // I will use this array to sort by date or alphabetically depending the case
        const TODO_list_array_original = []; // this just keeps the original order in which each item was created

        const TODO_list = document.querySelectorAll('li');

        TODO_list.forEach((element) => {
            let item_text_original = element.innerHTML;
            let item_text = item_text_original.split(' | ');
            let item_task = item_text[0];
            let item_due_date = item_text[2];
            item_due_date = item_due_date.split(' at ');
            item_due_date = item_due_date[0];

            TODO_list_array.push({item_text: item_text_original, item_task:item_task.toLowerCase(), item_due_date: item_due_date});
        })

        if(/Alphabetically/.exec(sort_option.value)){ // if we are trying to sort Alphabetically
            // Sorting two arrays using one of them (string sort) => https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/
            // number sort => arr.sort(functiona(a,b){return a.rowWidth - b.rowWidth}); Invert b and a in the return for descending
            if(/Ascending/.exec(sort_option.value)){ // Sort ascending
                TODO_list_array.sort(function (a, b) {
                    if (a.item_task < b.item_task) {
                      return -1;
                    }
                    if (a.item_task > b.item_task) {
                      return 1;
                    }
                    return 0;
                  });
            }else{ // Else, sort descending
                TODO_list_array.sort(function (a, b) {
                    if (a.item_task < b.item_task) {
                      return 1;
                    }
                    if (a.item_task > b.item_task) {
                      return -1;
                    }
                    return 0;
                  });
            }
        }else{ // else if we are trying to sort by Date
            if(/Ascending/.exec(sort_option.value)){ // Sort ascending
                TODO_list_array.sort(function (a, b) {
                    if (a.item_due_date < b.item_due_date) {
                      return -1;
                    }
                    if (a.item_due_date > b.item_due_date) {
                      return 1;
                    }
                    return 0;
                  });
            }else{ // Else, sort descending
                TODO_list_array.sort(function (a, b) {
                    if (a.item_due_date < b.item_due_date) {
                      return 1;
                    }
                    if (a.item_due_date > b.item_due_date) {
                      return -1;
                    }
                    return 0;
                  });
            }
        }
        
        // When finished sorting, update the list
        TODO_list.forEach((element,i) => {
            element.innerHTML = TODO_list_array[i].item_text;
        })

    }

})