document.addEventListener("DOMContentLoaded", () => {
  // Observer for regular sections
  const sections = document.querySelectorAll("section");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = index * 0.3; // Dynamic delay
        entry.target.style.transitionDelay = `${delay}s`;
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
        entry.target.style.transitionDelay = `0s`;
      }
    });
  });

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Function to format numbers like "15K" instead of "15000"
  
});
