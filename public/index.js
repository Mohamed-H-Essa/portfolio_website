// This is a sample JavaScript file for your portfolio website

// Add any JavaScript functionality you need for your website

// Example: Smooth scrolling to section when clicking on navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

