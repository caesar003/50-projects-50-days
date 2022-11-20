const body = document.body;
const sliderContainer = document.querySelector(".slider-container");

function init() {
    let el = "";
    let slides = "";
    let buttons = "";

    const images = [
        "annas_hummingbird_perched_on_a_branch-wallpaper-1920x1080.jpg",
        "forest_reflection_2-wallpaper-1920x1080.jpg",
        "golden_sun_rays_field-wallpaper-1920x1080.jpg",
        "monte_bromo_jawa_indonesia-wallpaper-1920x1080.jpg",
        "mountain_landscape_italy-wallpaper-1920x1080.jpg",
    ];
    const arrows = ["left", "right"];

    for (let i = 0; i < images.length; i++) {
        slides += `<div class="slide ${
            !i ? "active" : ""
        }" style="background-image:url('./img/${images[i]}');"></div>`;
    }

    for (const arrow of arrows) {
        buttons += `<button class="arrow ${arrow}-arrow" id="${arrow}">
        <i class="fas fa-arrow-${arrow}"></i> 
        </button>`;
    }

    el += `${slides} ${buttons}`;
    sliderContainer.innerHTML = el;
}
init();

const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
let activeSlide = 0;
rightBtn.addEventListener("click", () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setBgToBody();
    setActiveSlide();
});

leftBtn.addEventListener("click", () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setBgToBody();
    setActiveSlide();
});

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove("active"));

    slides[activeSlide].classList.add("active");
}

setBgToBody();
