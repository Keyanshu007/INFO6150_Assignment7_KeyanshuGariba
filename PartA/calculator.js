$(document).ready(function () {
    // Function to display the user's name
    function displayName() {
        // Parse the URL query parameters
        const params = new URLSearchParams(window.location.search);
        const name = params.get('Name');
        // Display the user's name in the "name-display" element
        $('#name-display').text(name);
    }

    // Validation function for number input fields
    function validate(input) {
        // Get the value from the input element
        const value = $(input).val();
        // Get the corresponding error element
        const errorElement = $(`#error-${$(input).attr('id')}`);
        // Clear any previous error message
        errorElement.text('');

        // Check for various validation conditions
        if (!value) {
            errorElement.text('Field cannot remain empty');
            return false;
        } else if (isNaN(value)) {
            errorElement.text('Input must be a number');
            return false;
        } else if (!isFinite(value)) {
            errorElement.text('Value must not be infinite');
            return false;
        }
        return true;
    }

    // Validate both number input fields on input
    $('#number1, #number2').on('input', function () {
        validate(this);
    });

    // Perform calculation when an operation button is clicked
    $('.operation-button').click(function () {
        // Get the data-operation attribute to determine the operation
        const operation = $(this).data('operation');
        // Parse the numerical values from the input fields
        const number1 = parseFloat($('#number1').val());
        const number2 = parseFloat($('#number2').val());
        
        // Validate the input values before calculation
        const isValidNumber1 = validate($('#number1'));
        const isValidNumber2 = validate($('#number2'));

        // If validation fails, stop the calculation
        if (!isValidNumber1 || !isValidNumber2) {
            return;
        }
        
        // Calculate the result based on the selected operation
        const result = calculate(number1, number2, operation);
        // Display the result in the "result" input field
        $('#result').val(result);
    });

    // Arrow function for performing calculations
    const calculate = (num1, num2, operation) => {
        switch (operation) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            default:
                return 'Invalid operation';
        }
    };

    // Initialize the application by displaying the user's name
    displayName();
});

