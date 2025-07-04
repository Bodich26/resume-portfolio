const swiper = new Swiper(".skills__slider", {
  slidesPerView: 6,
  slidesPerGroup: 1,
  spaceBetween: 30,
  centeredSlides: false,

  keyboard: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  speed: 400,

  breakpoints: {
    1400: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 2,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    470: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});

//Menu
const menu = document.querySelector(".menu");
const btnMenu = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".menu__line-close");

btnMenu.addEventListener("click", (event) => {
  menu.classList.add("open");
  event.stopPropagation();
});
closeMenu.addEventListener("click", (event) => {
  menu.classList.remove("open");
  event.stopPropagation();
});
window.addEventListener("click", (event) => {
  menu.classList.remove("open");
});
menu.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.querySelectorAll(".front__block-item").forEach((block) => {
  block.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;

    const link = block.querySelector(".front__block-icon[href]");
    if (link) {
      window.open(link.href, "_blank");
    }
  });
});
