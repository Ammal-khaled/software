// Handle Connection Request Actions
document.querySelectorAll(".connection-requests button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const action = e.target.textContent;
    const name = e.target.parentElement.querySelector("h3").textContent;

    if (action === "Accept") {
      alert(`You have accepted the connection request from ${name}.`);
    } else if (action === "Reject") {
      alert(`You have rejected the connection request from ${name}.`);
    }
  });
});

// Message Button Alert
document.querySelectorAll(".connections-list .action-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const name = e.target.parentElement.querySelector("h3").textContent;
    alert(`Starting a chat with ${name}.`);
  });
});

document.querySelector(".send-button").addEventListener("click", () => {
  const input = document.querySelector(".chat-input input");
  const message = input.value.trim();

  if (message) {
    const chatMessages = document.querySelector(".chat-messages");
    const newMessage = document.createElement("p");
    newMessage.classList.add("message", "sent");
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
    input.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});