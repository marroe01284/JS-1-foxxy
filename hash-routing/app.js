// Function to handle the routing logic
function handleHashChange() {
    const content = document.getElementById('content');
    switch (window.location.hash) {
        case '#/about':
            content.innerHTML = '<h1>About Us</h1><p>This is the about page.</p>';
            break;
        case '#/contact':
            content.innerHTML = '<h1>Contact Us</h1><p>Contact us here.</p>';
            break;
        default:
            // Default to home page view
            content.innerHTML = '<h1>Home</h1><p>Welcome to our SPA! Use the links above to navigate.</p>';
    }
}

// Listen for hash changes
window.addEventListener('hashchange', handleHashChange);

// Handle the routing when the page is loaded
window.addEventListener('load', handleHashChange);
