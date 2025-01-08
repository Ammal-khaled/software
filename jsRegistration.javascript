document.getElementById("registration-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const userType = document.getElementById("user-type").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!userType || !name || !email || !password) {
    alert("All fields are required!");
    return;
  }

  // Simulate API call
  console.log("Registering user:", { userType, name, email });
  alert("Registration successful!");
});