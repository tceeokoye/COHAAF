document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1, // Default to 1 slide per view
      spaceBetween: 20, // Add spacing between slides
      loop: true, // Disable infinite looping to prevent overflow
      centeredSlides: false, // Do not center the slides
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // Allow clicking on pagination dots
      },
      breakpoints: {
        // Adjust slides per view and spacing for different screen sizes
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
      },
    });
  });