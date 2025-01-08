document.getElementById("post-button").addEventListener("click", function () {
  const content = document.getElementById("post-content").value;

  if (!content) {
    alert("Please write something before posting.");
    return;
  }

  const feed = document.getElementById("feed");
  const newPost = document.createElement("li");

  newPost.innerHTML = `
    <h3>Your Name</h3>
    <p>${content}</p>
    <div class="interactions">
      <span>👍 0</span>
      <span>💬 0</span>
      <span>🔁 0</span>
    </div>
  `;

  feed.prepend(newPost);
  document.getElementById("post-content").value = "";
});