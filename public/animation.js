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
  function formatNumber(num) {
    return num >= 1000 ? (num / 1000).toFixed(0) + "K" : num;
  }

  // Function to animate counting numbers up
  function animateCountUp(element, target) {
    let count = 0;
    let speed = target / 100; // Adjust speed

    function updateCount() {
      count += speed;
      if (count >= target) {
        element.innerText = formatNumber(target);
      } else {
        element.innerText = formatNumber(Math.floor(count));
        requestAnimationFrame(updateCount);
      }
    }

    updateCount();
  }

  // Observer for number counting
  const numberObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const targetValue = element.getAttribute("data-target");

          const target = parseInt(targetValue || "0", 10);
          if (isNaN(target)) {
            console.error("Invalid data-target value:", targetValue);
            return;
          }

          animateCountUp(element, target);
          numberObserver.unobserve(element); // Stop observing after animation runs
        }
      });
    },
    { threshold: 0.5 }
  );

  function typeWriter(element, text, speed) {
    let i = 0;
    let tempText = ""; // Stores typed text
    let isTag = false;
    let tagBuffer = ""; // Holds tag content

    function type() {
      if (i < text.length) {
        let char = text.charAt(i);

        if (char === "<") {
          isTag = true;
          tagBuffer = char;
        } else if (char === ">") {
          isTag = false;
          tagBuffer += char;
          tempText += tagBuffer; // Append the complete tag to tempText
          tagBuffer = ""; // Reset the tag buffer
        } else if (isTag) {
          tagBuffer += char; // Build the tag content
        } else {
          tempText += char; // Append regular text
        }

        // Update the element's innerHTML with the current tempText
        element.innerHTML = tempText;

        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  const textElements = [
    {
      element: document.getElementById("paragraph"),
      text: 'By improving with the well-being of the less privileged in rural communities as commanded by Almighty God to <em style="font-style:italic;">"Love your neighbor"</em> in the Holy Book - Mark 12:31.',
    },
  ];

  let delay = 0;
  textElements.forEach(({ element, text }) => {
    setTimeout(() => typeWriter(element, text, 30), delay);
    delay += text.length * 12; // Adjust timing for sequential animation
  });
});
