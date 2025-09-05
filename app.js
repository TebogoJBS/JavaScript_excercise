< <script>
    function login() {
      const user = document.getElementById("username").value.trim(); // takes what is typed in the username box and stores it in 'user' variable.
      const pass = document.getElementById("password").value.trim(); // takes the typed password and stores it in the variable 'pass'.
      const message = document.getElementById("message"); // the element id "message" shows feedback to the user and stores it in the variable 'message'

      if (user === "" || pass === "") { // checks if the username or password is empty ("") if either box is empty it runs the code inside this block
        message.textContent = "Please enter both username and password."; // displays this message inside the 'message' element.
        message.className = "error"; // shows an error code usually in red font colour
      } else if (user === "admin" && pass === "1234") { // In order to login the username needs to be "admin" and password "1234". 
        message.textContent = "Login successful! 🎉"; // displays a Login successful message after you've entered the username and password correctly.
        message.className = "success"; // displays a "success" message usually in green font colour.
      } else { // If none of the above conditions are true (wrong username or password)
        message.textContent = "Invalid username or password."; // displays an error message in the 'message' element.
        message.className = "error"; // applies the error style usually in red font colour.
      }
    }
  </script>