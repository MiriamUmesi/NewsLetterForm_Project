// Confirmation page

// Get email from sessionStorage
const email = sessionStorage.getItem('email');

// Display confirmation message
const message = document.getElementById('confirmation');
message.textContent = `A confirmation email has been sent to ${email}. 
Please open it and click the button inside to confirm your subscription.`;