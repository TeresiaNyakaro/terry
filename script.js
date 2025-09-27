const form = document.getElementById('errandForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const type = document.getElementById('type').value;
  const task = document.getElementById('task').value;
  const time = document.getElementById('time').value;
  const location = document.getElementById('location').value;
  const urgency = document.getElementById('urgency').value;
  const budget = document.getElementById('budget').value;
  const notes = document.getElementById('notes').value;

  // Replace with your WhatsApp number (country code, no +, no spaces)
  const phoneNumber = "254798262008";  

  const message = `📌 New Errand Request:
- Name: ${name}
- Phone: ${phone}
- Type: ${type}
- Task: ${task}
- Time: ${time}
- Location: ${location}
- Urgency: ${urgency}
- Budget: Ksh ${budget || "Not specified"}
- Notes: ${notes || "None"}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
