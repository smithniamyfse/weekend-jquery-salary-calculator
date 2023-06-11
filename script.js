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

// Collect employee data in an array
// ? This array may be unnecessary, may original thought was if I deleted the object in the array, it would delete the annualSalary value too but I couldn't make it work. 
let employeeRoster = [];

//  Assemble individual employee salary data into a single array
let compileSalaries = [];


// When the HTML document (DOM) has loaded, call the onReady function
$(document).ready(onReady);

function onReady() {
    // TEST: does jQuery work?
    // console.log(`jQuery is ready: 🚀`); // TEST: successful

    // Event Listener for when the submit button is triggered by user
    $('#submit-button').on('click', onSubmitEmployeeData);
    $('#submit-button').on('click', calculateMonthlyTotal);
    // ? Curious about the best way to condense and activate different event handlers on one event listener - research says maybe .bind?
    // ? $('#submit-button').on('click', checkIfNumber);


    // Event Listener for when the delete button is triggered by user
    $('#employee-roster-table').on('click', '.delete', onDeleteEmployee);


} // end onReady

// ** 1. Create an *input form* that captures the following *employee information*: 

// Event handler to submitEmployeeData
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
    // TEST: Expect to see if employee objects were being pushed to the array
    // console.log('Checking employee roster ON ADD: ', employeeRoster); // ✅ Test successful 

    // Add the new annual salary object to the compileSalaries array
    compileSalaries.push(employee.annualSalary);
    // TEST: Expect to see if employee objects were being pushed to the array
    // console.log('Checking compile salary array ON ADD: ', compileSalaries); // ✅ Test successful 

    // ? Render - I saw these in the lecture notes and didn't fully understand how to rend everything but kept it just in case it is best practices.
    // Render the posts array
    render();

} // end onSubmitEmployeeData

// ? Thought was to have the employee.annualSalary value checked if it was a number and then alert if user was entering something other than an integer
// ? function checkIfNumber() {
//     var val = $('#annual-salary').val();
//     var check = $.isNumeric(val);
//     if (check) {
//         $('#annual-salary').html("The Value " + "<b>" + val + "</b>"+ " is Numeric");
//         }
//         else {
//         $("#annual-salary").html("The Value " + "<b>" + val + "</b>"+ " is not Numeric");
//         }
//         console.log('in Check if number: ' );

// } // end checkIfNumber // ? ❌ Testing and experimenting unsuccessful

// ** 3. Using the stored information (2-b.), calculate *monthly costs* and append this to the DOM.
// Event Handler: to calculate monthly total and trigger a red-background if monthly sum > 20000
function calculateMonthlyTotal() {
    let monthlySum = 0;
    for (let i = 0; i < compileSalaries.length; i++) {
        monthlySum += compileSalaries[i];
        if (monthlySum > 20000) {
            $('#monthly-total-container').addClass("red-background");
        }
    }

    // TEST: Expect Monthly sum to turn red if > 20k and replace previous values working correctly 
    // console.log('Expect Monthly sum to turn red if > 20k and replace previous values working correctly ', Number(monthlySum)); ✅ Test successful 

    // append sum to monthly-total
    // convert integer into USD dollar format
    $('#monthly-total').html(`
    <div>
    ${monthlySum.toLocaleString("en-US", { style: "currency", currency: "USD" })}
    </div>
    `);

} // end calculateMonthlyTotal

// Event handler deletes employee data
function onDeleteEmployee() {
    // Remove employee from table
    // Hey jQuery, give me the last thing I clicked on
    // Then give me its parent element 
    // Then give me its parent element
    // Then remove the parent element
    $(this).parent().parent().remove();

    // if ($(this).parent().parent().remove()){
    //     employeeRoster.pop(employee);
    //     compileSalaries.pop(employee.annualSalary);} // ❌ Test unsuccessful

    // if ($(this).parent().parent().remove()) {
    //     employeeRoster.pop(employee);} // ❌ Test unsuccessful

    // TEST: to see if all object properties and values were deleted, the value for employee.annualSalary did not
    // console.log('Checking employee roster AFTER DELETE: ', employeeRoster); // ❌ Test unsuccessful

} // end onDeleteEmployee

// ** 2. Configure the *'Submit' button* to perform the subsequent actions: 
// ? Render - I saw these in the lecture notes and didn't fully understand how to rend everything but kept it just in case it is best practices.
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
                <td>${employee.annualSalary}</td>
// ** 4. Create a *delete button* that removes an employee from the DOM.
                <td><button class="delete">❌ Delete</button></td>
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
