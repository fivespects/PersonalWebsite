// Get all section elements
const sections = document.querySelectorAll('section');
// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Function to update active link based on section in view
function updateActiveLink() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
}

// Function to smoothly scroll to a section
function smoothScroll(target) {
  document.getElementById(target).scrollIntoView({
    behavior: 'smooth'
  });
}

// Event listener for scroll events
window.addEventListener('scroll', updateActiveLink);

// Event listener for navigation links
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = this.getAttribute('href').substring(1);
    smoothScroll(targetSection);
  });
});
