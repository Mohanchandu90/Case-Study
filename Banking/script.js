document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission for demonstration purposes
  
  // Get values from form fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // For demonstration, log the values to console (in a real application, this data would be handled securely)
  console.log("Username:", username);
  console.log("Password:", password);
});
