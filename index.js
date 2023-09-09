// Get the form and input elements
const form = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');

// Add submit event listener
form.addEventListener('submit', (e) => {
  // Prevent default submission
  e.preventDefault();
  
  // Get input value
  const email = emailInput.value;

  // Store email in sessionStorage
  sessionStorage.setItem('email', email);
  
  // Redirect to confirmation page
  window.location.href = 'confirmation.html'; 
});