

document.addEventListener('DOMContentLoaded', function() {

  // Header
  const navbarHeight = document.querySelector('nav').offsetHeight;

  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href');
      const sectionTop = document.querySelector(sectionId).offsetTop;

      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: 'smooth'
      });
    });
  });

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Aos init
    AOS.init();
});
