document.addEventListener("DOMContentLoaded", function () {

    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {

        const track = slider.querySelector(".slider-track");
        let slides = slider.querySelectorAll(".slide");

        let index = 0;
        const visibleSlides = 5;
        const totalSlides = slides.length;

        // clonăm primele 5 pentru loop infinit
        for (let i = 0; i < visibleSlides; i++) {
            let clone = slides[i].cloneNode(true);
            track.appendChild(clone);
        }

        function getSlideWidth() {
    const slide = slider.querySelector(".slide");
    return slide.getBoundingClientRect().width + 20;
}

        function moveSlide() {
            index++;

            const slideWidth = getSlideWidth();

            track.style.transition = "transform 0.5s ease-in-out";
            track.style.transform = `translateX(-${index * slideWidth}px)`;

            if (index === totalSlides) {
                setTimeout(() => {
                    track.style.transition = "none";
                    track.style.transform = "translateX(0)";
                    index = 0;
                }, 500);
            }
        }

        setInterval(moveSlide, 2000);

    });

});