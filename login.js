document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userType = document.getElementById('userType').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // In a real application, you would make an API call here
    // For demo purposes, we'll just redirect to the appropriate dashboard
    switch(userType) {
        case 'student':
            window.location.href = 'student.html';
            break;
        case 'trainer':
            window.location.href = 'trainer.html';
            break;
        case 'employer':
            window.location.href = 'employer.html';
            break;
        case 'advisor':
            window.location.href = 'advisor.html';
            break;
    }
});