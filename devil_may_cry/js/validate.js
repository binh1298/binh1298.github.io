function validateForm() {
  // Make quick references to our fields.
  var fullname = document.getElementById("user_name");
  var email = document.getElementById("user_email");
  var fieldMessenger = document.getElementById("form-messenger");
  // To check empty form fields.
  if (isEmpty(fullname, fieldMessenger) || isEmpty(email, fieldMessenger)) {
    return false;
  }
  // Check each input in the order that it appears in the form.
  if(validateName(fullname, fieldMessenger, "* Please enter a valid name")) 
  {
    if(validateEmail(email,fieldMessenger,"* Please enter a valid email address")) 
    {
      return true;
    }
  }
  return false;
}

function isEmpty(field, fieldMessenger) {
  if (field == null) {
    return false;
  }
  if (field.value.length == 0) {
    fieldMessenger.innerHTML = "* Both fields are mandatory *"; // This segment displays the validation rule for all fields
    fieldMessenger.style.visibility = "visible";
    field.focus();
    return true;
  }
  fieldMessenger.innerHTML = "*";
  fieldMessenger.style.visibility = "hidden";
  return false;
}

// Function that checks whether input text is an alphabetic character or not.
function validateName(inputtext, fieldMessenger, alertMsg) {
  if (inputtext == null) return true;
  console.log(inputtext.value);
  var alphaExp = /^([A-Z]{1})+([[A-Za-z]+[,.]?[ ]?|[A-Za-z]+[-]]?)+$/gm;
  if (inputtext.value.match(alphaExp) != null) {
    fieldMessenger.innerHTML = "*";
    fieldMessenger.style.visibility = "hidden";
    return true;
  } else {
    fieldMessenger.innerHTML = alertMsg; // This segment displays the validation rule for name.
    fieldMessenger.style.visibility = "visible";
    inputtext.focus();
    return false;
  }
}
// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function validateEmail(email, fieldMessenger, alertMsg) {
  if (email == null) return true;
  var emailExp = /^[\w]([^@\s,;]+)@(([\w-]+\.)+(com|edu|org|net|gov|mil|vn|info))$/;
  if (email.value.match(emailExp) != null) {
    fieldMessenger.innerHTML = "*";
    fieldMessenger.style.visibility = "hidden";
    return true;
  } else {
    fieldMessenger.innerHTML = alertMsg; // This segment displays the validation rule for email.
    fieldMessenger.style.visibility = "visible";
    email.focus();
    return false;
  }
}
