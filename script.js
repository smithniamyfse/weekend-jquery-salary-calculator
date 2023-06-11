/* 

JQUERY SALARY CALCULATOR AGENDA
    Main Objective: Create an application that records employee salaries 
    and adds salaries up to report monthly costs.
    
        1. Create an *input form* that captures the following *employee information*: 
            - first name
            - last name
            - ID number
            - job title
            - annual salary

        2. Configure the *'Submit' button* to perform the subsequent actions: 
            a. Collect the form information
            b. Store the information to calculate monthly costs
            c. Append this information to the DOM 
            d. Clear the input fields. 

        3. Using the stored information (2-b.), calculate *monthly costs* and append this to the DOM. 
            - If the *total* monthly cost *exceeds $20,000*, add a *red* BACKGROUND COLOR to the total monthly cost *dollar amount*.

        4. Create a *delete button* that removes an employee from the DOM.

*/

// Declare global variable(s)
    // Variables can be accessed from anywhere in the program

// Track employee data - Do I need an array to collect all employee data?
let employeeRoster = [];

// ? Assemble individual employee salary data into a single array
// ? let compileSalaries = [];


// When the HTML document (DOM) has loaded, call the onReady function
$(document).ready(onReady);

function onReady(){
// TEST: does jQuery work?
// console.log(`jQuery is ready: 🚀`); // TEST: successful

// Event Listener for when the submit button is triggered by user
$('#submit-button').on('click', onSubmitEmployeeData);

} // end onReady



// Event handler
function onSubmitEmployeeData() {
    // Get the data from the <input> elements
    // and create a "post" object
    let employee = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        idNumber: $('#id-number').val(),
        jobTitle: $('#job-title').val(),
        annualSalary: $('#annual-salary').val()
    };

    // Add the new post object to our array (state)
    employeeRoster.push(employee);

    // Render the posts array
    render();   
}


function render() {
    // Render posts
    $('#postsTable').empty();
    for (let employee of employeeRoster) {
        $('#postsTable').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
            </tr>
        `);
    }

    // Render "dark mode"
    if (isDarkMode) {
        $('body').addClass('dark-mode');
    }
    else {
        $('body').removeClass('dark-mode');
    }
}



// // User will input data into the five fields  into affirmation and author fields then, once submit button is clicked, 
//   // input will be added to affirmations table
// // - Note: Be sure to delete the hardcoded table rows from index.html once you have this part working.
// function onSubmitEmployeeData(event){
//     // Disable default actions of submit button
//     event.preventDefault();
//     console.log('in affirmation');
//     // Grab value of input fields
//     let affirmationInputValue = $('#affirmation-input').val();
//     console.log('affirmationInputValue is:', affirmationInputValue);
  
//     let authorInputValue = $('#author-input').val();
//     console.log('authorInputValue is:', authorInputValue);
  
//     // Append input values into table
//     $('#table-body').append(`
//         <tr>  
//           <td>${affirmationInputValue}</td>
//           <td>${authorInputValue}</td>
//           <td><button class="delete">❌</button></td>
//         </tr>
//     `)
  
//     // clear form
//     $('#affirmation-input').val('');
//     $('#author-input').val('');

//   }