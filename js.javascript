document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill out both fields.");
    return;
  }

  // Simulate API call
  console.log("Logging in with:", { email, password });
  alert("Login successful!");
});