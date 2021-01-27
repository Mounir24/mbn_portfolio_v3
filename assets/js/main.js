/*======== SHOW MENU ========*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show-menu");
        });
    }
};

showMenu("nav-toggle", "nav-menu");

/*==============SHOW SCROLL TOP ================*/
const scrollTop = () => {
    const scrollTop = document.getElementById("scroll-top");
    // When the scoll is higher than 560 viewpport , add -- show-scroll class
    if (this.scrollY >= 1900) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollTop);

/*====== REMOVE MENU MOBILE ========*/
const nvlinks = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}

nvlinks.forEach((c) => c.addEventListener("click", linkAction));

/*==== CHANGE HEADER BACKROUND ======*/
const scrollHeader = () => {
    const header = document.getElementById("header");

    if (this.scrollY >= 30) header.classList.add("show-header");
    else header.classList.remove("show-header");
};

window.addEventListener("scroll", scrollHeader);

/*============== SCROLL SECTIONS ACTIVE LINK =================*/
/*const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);*/

/*====== Owl Carousel ======*/
/*$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        items: 1,
        autoplayTimeout: 1500,
    });
});*/

$(".img__wrapper").magnificPopup({
    gallery: { enabled: true },
    delegate: "div",
    type: "image",
    // other options
});

/*====== SLICK JS ======*/
$(".slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});
$(".testimonials__slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    /*responsive: [{
                              breakpoint: 1024,
                              settings: {
                                  slidesToShow: 3,
                                  slidesToScroll: 3,
                                  infinite: true,
                                  dots: true,
                              },
                          },
                          {
                              breakpoint: 666,
                              settings: {
                                  slidesToShow: 2,
                                  slidesToScroll: 1,
                              },
                          },
                          {
                              breakpoint: 480,
                              settings: {
                                  slidesToShow: 1,
                                  slidesToScroll: 1,
                              },
                          },
                          // You can unslick at a given breakpoint now by adding:
                          // settings: "unslick"
                          // instead of a settings object
                      ],*/
});
$(".team__slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});
$(".slider-1").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 4500,

    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});

$(".slider-2").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});

$(".banner__slider").slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2500,
});

$(".work__slider").slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
        breakpoint: 330,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    }, ],
});

$(".work__slider1").slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
});

$(".work__slider2").slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3500,
});
// Titl.js Animation
$(".btn__global").tilt({
    glare: false,
    maxGlare: 0.5,
});

/*======= MAGNIFIC POPUP VIDEO ======*/
$(document).ready(function() {
    $(".btn__popup").magnificPopup({
        type: "iframe",
    });

    /*====== CountUp JS =====*/
    /*const c = new CountUp("static__count", 0, 03);
                    c.start();*/
});

/*====== SEND MAIL ======*/
/*========== TYPING ANIMATION WITH JAVASCIPT ============*/
const str = "Our work";
let i = 0;

function typing() {
    if (i < str.length) {
        document.getElementById("bnr__label").innerHTML += str.charAt(i);
        i++;
        setTimeout(typing, 180);
    }
}
typing();