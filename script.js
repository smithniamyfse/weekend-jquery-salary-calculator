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

// Event Listener for when the delete button is triggered by user
$('#employee-roster-table').on('click', '.delete', onDeleteEmployee);


} // end onReady


// Event handler - input data field
function onSubmitEmployeeData(event) {
    // Override and disable default form behavior
    event.preventDefault();
    // Get the data from the <input> elements
    // and create a "post" object
    let employee = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        idNumber: $('#id-number').val(),
        jobTitle: $('#job-title').val(),
        annualSalary: $('#annual-salary').val()
    };

    // Add the new employee object to the employeeRoster array
    employeeRoster.push(employee);

    console.log('Checking employee roster: ', employeeRoster);

    // Append input values into the employee roster table 
        $('#employee-roster-table').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
                <td><button class="delete">Delete</button></td>
            </tr>
        `);


    // Clear inputs of form 
    // Hey jQuery find the input elements and set their value to an empty string
    $('#first-name').val('');
    $('#last-name').val('');
    $('#id-number').val('');
    $('#job-title').val('');
    $('#annual-salary').val('');

} // end onSubmitEmployeeData


function onDeleteEmployee() {
    // Remove employee from table
    // Hey jQuery, give me the last thing I clicked on
        // Then give me its parent element 
        // Then give me its parent element
        // Then remove the parent element
    $(this).parent().parent().remove();

    // Remove employee object from the employeeRoster array
    employeeRoster.pop(employee);
} // end onDeleteEmployee


