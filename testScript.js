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

// todo CSS Manipulation: for color
// .addClass(class-name-parameter): Adds a CSS class to selected element (or elements).

// .removeClass(class-name-parameter): Removes a CSS class from selected element (or elements).

// .toggleClass(class-name-parameter): Toggles a CSS class on selected element (or elements).



// Declare global variable(s)
    // Variables can be accessed from anywhere in the program

// Collect employee data in an array
let employeeRoster = [];

//  Assemble individual employee salary data into a single array
let compileSalaries = [];


// When the HTML document (DOM) has loaded, call the onReady function
$(document).ready(onReady);

function onReady(){
// TEST: does jQuery work?
// console.log(`jQuery is ready: 🚀`); // TEST: successful

// Event Listener for when the submit button is triggered by user
$('#submit-button').on('click', onSubmitEmployeeData);
$('#submit-button').on('click', calculateMonthlyTotal);


// Event Listener for when the delete button is triggered by user
$('#employee-roster-table').on('click', '.delete', onDeleteEmployee);


} // end onReady


// Event handler
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
        annualSalary: Number($('#annual-salary').val())
    };

    // Add the new employee object to the employeeRoster array
    employeeRoster.push(employee);
    console.log('Checking employee roster ON ADD: ', employeeRoster);

    // Add the new annual salary object to the compileSalaries array
    compileSalaries.push(employee.annualSalary);
    console.log('Checking compile salary array ON ADD: ', compileSalaries);

        // Render the posts array
        render();

} // end onSubmitEmployeeData


function calculateMonthlyTotal() {
    let monthlySum = 0;
    for(let i = 0; i < compileSalaries.length; i++) {
        monthlySum += compileSalaries[i];
    }
    console.log('THe SUM is ', Number(monthlySum)); 
    if(monthlySum > 20000) {
        $('#monthly-total').addClass("red-background");
    }

// append sum to monthly-total

$('#monthly-total').html(`
<div>
${monthlySum}
</div>
`); 

} // end calculateMonthlyTotal

function onDeleteEmployee() {
    // Remove employee from table
    // Hey jQuery, give me the last thing I clicked on
        // Then give me its parent element 
        // Then give me its parent element
        // Then remove the parent element
    $(this).parent().parent().remove();

    // if ($(this).parent().parent().remove()){
    //     employeeRoster.pop(employee);
    //     compileSalaries.pop(employee.annualSalary);}

    // if ($(this).parent().parent().remove()) {
    //     employeeRoster.pop(employee);}

    console.log('Checking employee roster AFTER DELETE: ', employeeRoster);

} // end onDeleteEmployee

function render() {
    // Render posts
    $('#employee-roster-table').empty();
    for (employee of employeeRoster) {
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
    }

    } // end render