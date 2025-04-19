// Handle logout
document.getElementById('logout').addEventListener('click', function(e) {
    e.preventDefault();
    // In a real application, you would clear session/tokens here
    window.location.href = 'login.html';
});

// Add click handlers for dashboard buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // In a real application, these would navigate to specific features
        alert('This feature will be implemented soon!');
    });
});