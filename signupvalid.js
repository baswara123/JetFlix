
  function validateForm() {

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var dateOfBirth = document.querySelector(".date-box").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var terms = document.querySelector('input[type="checkbox"]');
  

    if (name === "" || password === "" || confirmPassword === "" || dateOfBirth === "" || !gender || !terms.checked) {
      alert("Please fill in all fields and accept the terms and conditions.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
   
    return true;
  }