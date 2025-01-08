  <!-- JavaScript -->
  <script>
    document.getElementById("mentor-search-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const query = document.getElementById("search-query").value;
      if (!query) {
        alert("Please enter a search term.");
        return;
      }
      alert(`Results for "${query}" will be displayed here.`);
    });

    function contactMentor(email) {
      window.location.href = `mailto:${email}`;
    }
  </script>