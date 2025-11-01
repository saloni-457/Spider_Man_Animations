// Fetch form and inputs
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Function to set error
function setError(input, message) {
  const formGroup = input.parentElement; // .form-group
  const errorMsg = formGroup.querySelector(".error-message");
  errorMsg.textContent = message; // ✅ show message
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
}

// Function to set success
function setSuccess(input) {
  const formGroup = input.parentElement;
  const errorMsg = formGroup.querySelector(".error-message");
  errorMsg.textContent = ""; // ✅ clear message
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
}

// Validation functions
function validateName() {
  const nameValue = nameInput.value.trim();
  if (nameValue.length < 3 || !/^[A-Za-z\s]+$/.test(nameValue)) {
    setError(nameInput, "Name must be at least 3 letters and contain only alphabets.");
    return false;
  } else {
    setSuccess(nameInput);
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailValue)) {
    setError(emailInput, "Enter a valid email address.");
    return false;
  } else {
    setSuccess(emailInput);
    return true;
  }
}

function validatePassword() {
  const passValue = passwordInput.value.trim();
  if (passValue.length < 8) {
    setError(passwordInput, "Password must be at least 8 characters long.");
    return false;
  } else {
    setSuccess(passwordInput);
    return true;
  }
}

// Event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    console.log("Form submitted successfully!");
  }
});
