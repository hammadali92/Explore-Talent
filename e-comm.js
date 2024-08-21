  let currentIndex = 0;
    const items = document.querySelectorAll('.swiper-slide');
    const totalItems = items.length;

    function updateSwiper() {
        const offset = -currentIndex * 100;
        document.querySelector('.swiper-wrapper').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSwiper();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSwiper();
    }

    // Auto slide
    setInterval(() => {
        nextSlide();
    }, 5000);

    document.addEventListener('DOMContentLoaded', function () {
        // Initialize swiper
        var swiper = new Swiper('.swiper', {
            slidesPerView: 2, // Display two slides at a time
            spaceBetween: 10, // Adjust as needed
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });




    let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides');
    
    slides.forEach(slide => {
        const totalSlides = slide.children.length;
        
        if (slideIndex >= totalSlides - 2) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = totalSlides - 3;
        }
        
        slide.style.transform = `translateX(${-slideIndex * (100 + 10)}%)`; // 30% image width + 10px margin
    });
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

// Initialize the first slide
showSlides();


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
