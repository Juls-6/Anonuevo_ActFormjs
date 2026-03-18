const form = document.getElementById("registrationForm");

// Prevent numbers in name fields and auto-format first letters
function autoFormatName(input) {
    // Remove any numbers immediately
    input.value = input.value.replace(/[0-9]/g, "");

    // Capitalize first letter of each word, keep spaces
    let words = input.value.split(" ");
    words = words.map(word => {
        if (word.length === 0) return "";
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    input.value = words.join(" ");
}

// Apply to all name fields
document.getElementById("firstName").addEventListener("input", function() {
    autoFormatName(this);
});

document.getElementById("middleName").addEventListener("input", function() {
    autoFormatName(this);
});

document.getElementById("lastName").addEventListener("input", function() {
    autoFormatName(this);
});

// Password strength meter
const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");
const strengthBar = document.getElementById("strengthBar");

passwordInput.addEventListener("input", () => {
const value = passwordInput.value;
let strength = 0;

if (value.length >= 8) strength++;
if (/[A-Z]/.test(value)) strength++;
if (/[0-9]/.test(value)) strength++;
if (/[^A-Za-z0-9]/.test(value)) strength++;

switch (strength) {
case 0:
case 1:
strengthText.textContent = "Weak";
strengthBar.style.width = "25%";
strengthBar.style.background = "red";
break;

case 2:
strengthText.textContent = "Medium";
strengthBar.style.width = "50%";
strengthBar.style.background = "orange";
break;

case 3:
strengthText.textContent = "Strong";
strengthBar.style.width = "75%";
strengthBar.style.background = "blue";
break;

case 4:
strengthText.textContent = "Very Strong";
strengthBar.style.width = "100%";
strengthBar.style.background = "green";
break;
}
});

form.addEventListener("submit", function(e) {
e.preventDefault();

let isValid = true;

// Inputs
const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");
const course = document.getElementById("course");
const password = document.getElementById("password");
const gender = document.getElementsByName("gender");
const terms = document.getElementById("terms");

// Regex
const nameRegex = /^[A-Za-z\s]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

// Clear errors
document.querySelectorAll(".error").forEach(e => e.textContent = "");

// First Name
if (!nameRegex.test(firstName.value)) {
showError(firstName, "Only letters allowed");
isValid = false;
}

// Middle Name (optional)
if (middleName.value && !nameRegex.test(middleName.value)) {
showError(middleName, "Only letters allowed");
isValid = false;
}

// Last Name
if (!nameRegex.test(lastName.value)) {
showError(lastName, "Only letters allowed");
isValid = false;
}

// Course
if (course.value === "") {
showError(course, "Please select a course");
isValid = false;
}

// Password
if (!passwordRegex.test(password.value)) {
showError(password, "Min 8 chars, 1 uppercase, 1 number, 1 special char");
isValid = false;
}

// Gender
let genderSelected = false;
gender.forEach(g => {
if (g.checked) genderSelected = true;
});

if (!genderSelected) {
showError(gender[0], "Select gender");
isValid = false;
}

// Terms
if (!terms.checked) {
showError(terms, "You must accept terms");
isValid = false;
}

// Success
if (isValid) {
alert("Registration Successful ");
form.reset();

// reset strength meter
strengthText.textContent = "";
strengthBar.style.width = "0%";
}
});

// Error function
function showError(input, message) {
const formGroup = input.closest(".form-group");
formGroup.querySelector(".error").textContent = message;
}

// Prevent numbers in name fields and auto-format first letters
function autoFormatName(input) {
    // Remove numbers and special characters, allow only letters and spaces
    input.value = input.value.replace(/[^A-Za-z\s]/g, "");

    // Capitalize first letter of each word, keep spaces
    let words = input.value.split(" ");
    words = words.map(word => {
        if (word.length === 0) return "";
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    input.value = words.join(" ");
}

// Apply to all name fields
document.getElementById("firstName").addEventListener("input", function() {
    autoFormatName(this);
});

document.getElementById("middleName").addEventListener("input", function() {
    autoFormatName(this);
});

document.getElementById("lastName").addEventListener("input", function() {
    autoFormatName(this);
});

// Apply to all name fields
document.getElementById("firstName").addEventListener("input", function() {
    autoFormatName(this);
});

document.getElementById("middleName").addEventListener("input", function() {
    autoFormatName(this);
});

document.getElementById("lastName").addEventListener("input", function() {
    autoFormatName(this);
});