<script>
    function login() {
      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value.trim();
      const message = document.getElementById("message");

      if (user === "" || pass === "") {
        message.textContent = "Please enter both username and password.";
        message.className = "error";
      } else if (user === "admin" && pass === "1234") {
        message.textContent = "Login successful! 🎉";
        message.className = "success";
      } else {
        message.textContent = "Invalid username or password.";
        message.className = "error";
      }
    }
  </script>
