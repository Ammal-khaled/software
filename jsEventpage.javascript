// Function to register for an event (this could be further implemented)
function registerEvent(eventName) {
  alert(`You have registered for the ${eventName}.`);
}

// Function to set a reminder for an event
function setReminder(eventName, eventDate, eventTime) {
  // Check if the browser supports notifications
  if (Notification.permission === "granted") {
    sendReminderNotification(eventName, eventDate, eventTime);
  } else if (Notification.permission !== "denied") {
    // Request notification permission if not granted
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        sendReminderNotification(eventName, eventDate, eventTime);
      }
    });
  } else {
    alert("Please enable notifications in your browser to receive event reminders.");
  }
}

// Function to send a reminder notification
function sendReminderNotification(eventName, eventDate, eventTime) {
  const notificationOptions = {
    body: `${eventName} is coming up on ${eventDate} at ${eventTime}.`,
    icon: "icon.png", // You can set a custom icon here
    tag: "event-reminder",
  };
  
  const notification = new Notification("Event Reminder", notificationOptions);

  // Close the notification after 5 seconds
  setTimeout(() => {
    notification.close();
  }, 5000);
}