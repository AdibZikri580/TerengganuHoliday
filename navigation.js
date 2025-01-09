document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li');
  
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
        navItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
      });
    });
  
    // Function to close dropdown on click outside
    document.addEventListener('click', (event) => {
      const isDropdown = event.target.closest('.dropdown');
      const isNav = event.target.closest('nav');
  
      if (!isDropdown && !isNav) {
        navItems.forEach((item) => {
          item.classList.remove('active'); 
        });
      }
    });
  });
  
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
  }