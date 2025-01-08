document.getElementById("profile-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;

  // Simulate saving data
  console.log("Profile Updated:", { name, email, education, experience });
  alert("Your profile has been updated successfully!");
});