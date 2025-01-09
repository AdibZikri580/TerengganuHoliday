document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form from submitting normally
            alert('Thank you for your message!');
            this.reset(); // Reset the form fields
        });

        // Close form if click outside the form area
        document.addEventListener('click', (event) => {
            if (!form.contains(event.target)) {
                form.style.display = 'none'; // Adjust this line based on how you want to handle the form closing
            }
        });
    }
});
