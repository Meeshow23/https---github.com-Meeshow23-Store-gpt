document.addEventListener("DOMContentLoaded", function () {
    const slideshowContainer = document.querySelector(".slideshow-container");
    const images = document.querySelectorAll(".slideshow-section img");
    let counter = 1;

    setInterval(() => {
        slideshowContainer.style.transform = `translateX(${-counter * 100}%)`;
        counter++;

        if (counter === images.length) {
            counter = 0;
        }
    }, 3000); // Change the duration (in milliseconds) between image transitions
});
