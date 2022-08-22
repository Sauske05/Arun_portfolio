
$(document).ready(function () {

});

$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
        $('.scroll-up-btn').click(function () {
            window.scrollTo(0, 0);
        });
    }
    );
});
// typing animation
$(document).ready(function () {
    var typed = new Typed(".typing", {
        strings: ["a Developer...", "a Freelancer.", "an Enthusiast.", " Xiao's Homie"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Developer.", "Freelancer.", "Tech Enthusiast.", "....."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

$(document).ready(function () {
    var typed = new Typed(".gmail", {
        strings: ["jarun6069@gmail.com"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true
    });
    // var typed = new Typed(".typing-2", {
    //     strings: ["Developer.", "Freelancer.", "Tech Enthusiast.", "....."],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });
});

var responsiveSlider1 = function () {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener('resize', function () {
        sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function () {
        if (count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    var nextSlide = function () {
        if (count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = items) {
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function () {
        nextSlide();
    });

    prev.addEventListener("click", function () {
        prevSlide();
    });

    setInterval(function () {
        nextSlide()
    }, 5000);

};

var responsiveSlider2 = function () {

    var slider = document.getElementById("slider1");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap1");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev1");
    var next = document.getElementById("next1");

    window.addEventListener('resize', function () {
        sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function () {
        if (count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    var nextSlide = function () {
        if (count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = items) {
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function () {
        nextSlide();
    });

    prev.addEventListener("click", function () {
        prevSlide();
    });

    setInterval(function () {
        nextSlide()
    }, 5000);

};

var responsiveSlider3 = function () {

    var slider = document.getElementById("slider2");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap2");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev2");
    var next = document.getElementById("next2");

    window.addEventListener('resize', function () {
        sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function () {
        if (count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    var nextSlide = function () {
        if (count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = items) {
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function () {
        nextSlide();
    });

    prev.addEventListener("click", function () {
        prevSlide();
    });

    setInterval(function () {
        nextSlide()
    }, 10000);

};

window.onload = function () {
    responsiveSlider1();
    responsiveSlider2();
    responsiveSlider3();
}



//common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal('.homepage .cover_container', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.sec-01 .image, .info', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.sec-02 .image, .sec-03 .image, .skills .my_skills', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.projects .image_sliders, .projects .title', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.projects .paragraphs', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.skills .box', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.box_2', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.box_1, .contact_me .contact_me_box h2', { delay: 600, origin: 'top' });
ScrollReveal().reveal('.box_2 div form label, .box_2 div form input, .box_2 div form textarea', { delay: 1000, origin: 'left' });


