$(document).ready(function () {

var validEmail = false;
var validName = false;
var validPassword = false;
var validConfirmPassword = false;

var regExName = /^(?=.{3,12}$)[A-Za-z]*$/;
var regExEmail = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
var regExPasswords = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])([A-Za-z\d@#$%^&+=!]{6,14})$/;

$("#Name").on("input", validate);
$("#emailId").on("input", validate);
$("#password").on("input", validate);
$("#confirmPassword").on("input", validate);

function validate() {
    var value = $(this).val();
    var type = this.id; // Get the ID of the field
    var em = "error_" + type;

    switch (type) {

        case "emailId":
            if (!value.trim().match(regExEmail)) {
                $("#" + em).css("display", "block");
                $(this).css("border", "2px solid red");
                validEmail = false;
                console.log("valid Email", validEmail);
            } else {
                $("#" + em).css("display", "none");
                $(this).css("border", "");
                validEmail = true;
                console.log("valid Email", validEmail);
            }
            break;

        case "Name":
            if (!value.trim().match(regExName)) {
                $("#" + em).css("display", "block");
                $(this).css("border", "2px solid red");
                validName = false;
                console.log("validName", validName);
            } else {
                $("#" + em).css("display", "none");
                $(this).css("border", "");
                validName = true;
                console.log("validName", validName);
            }
            break;

        case "password":
            if (!value.trim().match(regExPasswords)) {
                $("#" + em).css("display", "block");
                $(this).css("border", "2px solid red");
                validPassword = false;
                console.log("valid Password", validPassword);
            } else {
                $("#" + em).css("display", "none");
                $(this).css("border", "");
                validPassword = true;
                console.log("valid Password", validPassword);
            }
            break;

        case "confirmPassword":
            if (value !== $("#password").val()) {
                $("#" + em).text("Passwords do not match");
                $("#" + em).css("display", "block");
                $(this).css("border", "2px solid red");
                validConfirmPassword = false;
                console.log("valid Password", validConfirmPassword);
            } else {
                $("#" + em).css("display", "none");
                $(this).css("border", "");
                validConfirmPassword = true;
                console.log("valid Password", validConfirmPassword);
            }
            break;
    }
}

// Function to check if all form fields are valid
function areAllFieldsValid() {
    return (
        validName &&
        validEmail &&
        validPassword &&
        validConfirmPassword
    );
}

// Attach an input event listener to the form fields
$("#Name, #emailId, #password, #confirmPassword").on("input", function () {
    var loginButton = $("#loginButton");
    if (areAllFieldsValid()) {
        loginButton.prop("disabled", false);
        
    } else {
        loginButton.prop("disabled", true);
    }
});

$("#loginButton").click(function () {
    if (validName && validEmail && validPassword && validConfirmPassword) {
        console.log("Redirection condition met");
        const name = $("#Name").val(); // Get the value of "Name" input
        window.location.href = "calculator.html?Name=" + name; // Pass the name as a URL parameter

    } else {
        console.log("Redirection condition not met");
    }
});





});

















