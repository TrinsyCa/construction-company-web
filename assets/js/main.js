var swiper = new Swiper(".mansetSwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
});

const menuList = document.querySelectorAll(".menu-list");
menuList.forEach((menu) => {
    const menuLink = menu.querySelectorAll("a");
    menu.addEventListener("mouseover", function () {
        menuList.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
    });
});

const menuBtn = document.getElementById("menuBtn");
const navMenus = document.getElementById("navMenus");
navActive = 0;
menuBtn.addEventListener("click", function() {
    if(navActive == 0) {
        navMenus.style.height = navMenus.scrollHeight + "px";
        navActive = 1;
    }
    else {
        navMenus.style.height = "0px";
        navActive = 0;
    }
});

window.addEventListener("resize", function() {
    if(window.innerWidth > 992) {
        navMenus.style.height = "100%";
    }
    else if (navActive == 0) {
        navMenus.style.height = "0";
    }
});