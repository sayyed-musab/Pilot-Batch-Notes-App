document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the form and submit button
    const form = document.getElementById('signup-form');
    const submitButton = document.getElementById('signup-btn');
    const errContainer = document.getElementById('signup-err');
    
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Validate form data
        if (validateForm()) {
            // If validation passes, prepare data for submission
            const formData = {
                name: form.name.value,
                username: form.username.value,
                password: form.password.value
                // You can add more fields as needed
            };

            // Send data to backend (Assuming using fetch API for simplicity)
            fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was a problem with sign up. Please try again later.');
            });
        }
    });

    // Function to validate form fields
    function validateForm() {
        const name = form.name.value.trim();
        const username = form.username.value.trim();
        const password = form.password.value.trim();
        const confirmPassword = form['confirm-password'].value.trim();

        // Simple validation for demonstration
        if (name === '' || username === '' || password === '' || confirmPassword === '') {
            errContainer.style.display = 'block'
            errContainer.innerText = "All fields are required."
            return false;
        }

        if (password !== confirmPassword) {
            errContainer.style.display = 'block'
            errContainer.innerText = "Passwords do not match."
            return false;
        }

        return true;
    }
});
