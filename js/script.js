// Hamburger menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

const swiper = new Swiper(document.querySelector(".mySwiper"), {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        enabled: true,
      },
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        enabled: true,
      },
    },
    // when window width is >= 640px
    976: {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        enabled: false,
      },
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});
