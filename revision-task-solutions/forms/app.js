document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(element) {
        element.textContent = '';
    });

    // Input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let hasError = false;

    // Validate name
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required.';
        hasError = true;
    }

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email-error').textContent = 'Valid email is required.';
        hasError = true;
    }

    // Validate subject
    if (!subject || subject.length < 5) {
        document.getElementById('subject-error').textContent = 'Subject must be at least 5 characters long.';
        hasError = true;
    }

    // Validate message
    if (!message || message.length < 10) {
        document.getElementById('message-error').textContent = 'Message must be at least 10 characters long.';
        hasError = true;
    }

    // Display success message if no error
    if (!hasError) {
        document.getElementById('contact-form').reset(); // Reset form fields
        document.getElementById('success-message').textContent = 'Thank you for contacting us!';
    }
});
