function validateForm() {
  // Get input fields
  var fullName = document.forms["registrationForm"]["fullName"].value;
  var email = document.forms["registrationForm"]["email"].value;
  var phoneNumber = document.forms["registrationForm"]["phoneNumber"].value;
  var dateOfBirth = document.forms["registrationForm"]["dateOfBirth"].value;
  var gender = document.forms["registrationForm"]["gender"].value;
  var address = document.forms["registrationForm"]["address"].value;
  var course = document.forms["registrationForm"]["course"].value;

  // Define regular expressions for validation
  var fullNameRegex = /^[a-zA-Z\s]+$/;
  var emailRegex = /^\S+@\S+\.\S+$/;
  var phoneNumberRegex = /^\d{10}$/;

  // Define error messages
  var fullNameError = "Please enter a valid full name";
  var emailError = "Please enter a valid email address";
  var phoneNumberError = "Please enter a valid 10-digit phone number";
  var dateOfBirthError = "Please select a date of birth";
  var genderError = "Please select a gender";
  var addressError = "Please enter an address";
  var courseError = "Please enter a course name";

  // Validate input fields
  if (!fullNameRegex.test(fullName)) {
    alert(fullNameError);
    return false;
  }
  if (!emailRegex.test(email)) {
    alert(emailError);
    return false;
  }
  if (!phoneNumberRegex.test(phoneNumber)) {
    alert(phoneNumberError);
    return false;
  }
  if (dateOfBirth === "") {
    alert(dateOfBirthError);
    return false;
  }
  if (gender === "") {
    alert(genderError);
    return false;
  }
  if (address === "") {
    alert(addressError);
    return false;
  }
  if (course === "") {
    alert(courseError);
    return false;
  }

  // Form is valid
  return true;
}
