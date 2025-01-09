document.addEventListener('DOMContentLoaded', () => {
  // Select all dropdown elements
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
      // Select the dropdown title
      const title = dropdown.querySelector('.dropdown-title');
      const content = dropdown.querySelector('.dropdown-content');

      if (title && content) {
          // Add event listener for click on the title
          title.addEventListener('click', (event) => {
              // Prevent event from propagating to the body
              

              const isVisible = content.style.display === 'block';
              content.style.display = isVisible ? 'none' : 'block';
          });

          // Close dropdown if click outside the dropdown area
          document.addEventListener('click', (event) => {
              // Ensure click outside dropdown closes the dropdown
              if (!dropdown.contains(event.target)) {
                  content.style.display = 'none';
              }
          });
      }
  });
});
